'use client';

import React, { useEffect, useState } from 'react';
import Centerblock from '../../components/Centerblock/Centerblock';
import { getTracks } from '../../api/tracks';
import { TrackType } from '../../types/track';

export default function Home() {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTracks()
      .then((data) => {
        setTracks(data);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Не удалось загрузить треки');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div style={{ color: '#fff', padding: '20px' }}>Загрузка треков...</div>;
  }

  if (error) {
    return <div style={{ color: '#ff4d4f', padding: '20px' }}>{error}</div>;
  }

  return <Centerblock tracks={tracks} />;
}
