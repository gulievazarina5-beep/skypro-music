"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Centerblock from "../../../../components/Centerblock/Centerblock";
import { getSelectionById, getTracks } from "../../../../api/tracks";
import { TrackType } from "../../../../types/track";

export default function CategoryPage() {
  const params = useParams<{ id: string }>();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [title, setTitle] = useState<string>("Подборка");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.id) return;

    Promise.all([getSelectionById(params.id), getTracks()])
      .then(([selection, allTracks]) => {
        setTitle(selection.name);
        const filteredTracks = allTracks.filter((track) =>
          selection.items.includes(track._id),
        );
        setTracks(filteredTracks);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Не удалось загрузить подборку");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params?.id]);

  if (isLoading) {
    return (
      <div style={{ color: "#fff", padding: "20px" }}>Загрузка подборки...</div>
    );
  }

  if (error) {
    return <div style={{ color: "#ff4d4f", padding: "20px" }}>{error}</div>;
  }

  return <Centerblock tracks={tracks} title={title} />;
}
