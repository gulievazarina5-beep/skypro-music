import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "../../types/track";

interface TrackState {
  currentTrack: TrackType | null;
  isPlaying: boolean;
  playlist: TrackType[];
}

const initialState: TrackState = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.playlist = action.payload;
    },
  },
});

export const { setCurrentTrack, setIsPlaying, setPlaylist } =
  trackSlice.actions;
export default trackSlice.reducer;
