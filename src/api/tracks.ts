import { TrackType, SelectionType } from "../types/track";

const BASE_URL = "https://webdev-music-003b5b991590.herokuapp.com";

export async function getTracks(): Promise<TrackType[]> {
  const res = await fetch(`${BASE_URL}/catalog/track/all/`);

  if (!res.ok) {
    throw new Error("Не удалось загрузить треки");
  }

  const data = await res.json();
  return data.data;
}

export async function getSelectionById(id: string): Promise<SelectionType> {
  const res = await fetch(`${BASE_URL}/catalog/selection/${id}/`);

  if (!res.ok) {
    throw new Error("Не удалось загрузить подборку");
  }

  const data = await res.json();
  return data.data;
}
