import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "../../types/track";

interface TrackState {
  currentTrack: TrackType | null;
  isPlaying: boolean;
  playlist: TrackType[];
  shuffledPlaylist: TrackType[];
  isShuffle: boolean;
}

const initialState: TrackState = {
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  shuffledPlaylist: [],
  isShuffle: false,
};

const shuffleArray = (
  array: TrackType[],
  currentTrack: TrackType | null
): TrackType[] => {
  const otherTracks = currentTrack
    ? array.filter((t) => t._id !== currentTrack._id)
    : [...array];

  for (let i = otherTracks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otherTracks[i], otherTracks[j]] = [otherTracks[j], otherTracks[i]];
  }

  return currentTrack ? [currentTrack, ...otherTracks] : otherTracks;
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
      if (state.isShuffle && state.playlist.length > 0) {
        state.shuffledPlaylist = shuffleArray(state.playlist, action.payload);
      }
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.playlist = action.payload;
      if (state.isShuffle) {
        state.shuffledPlaylist = shuffleArray(
          action.payload,
          state.currentTrack
        );
      }
    },
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
      if (state.isShuffle) {
        state.shuffledPlaylist = shuffleArray(
          state.playlist,
          state.currentTrack
        );
      } else {
        state.shuffledPlaylist = [];
      }
    },
    setNextTrack: (state) => {
      if (
        state.isShuffle &&
        state.shuffledPlaylist.length === 0 &&
        state.playlist.length > 0
      ) {
        state.shuffledPlaylist = shuffleArray(
          state.playlist,
          state.currentTrack
        );
      }

      const activeList = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;

      if (!state.currentTrack || activeList.length === 0) return;

      const currentIndex = activeList.findIndex(
        (track) => track._id === state.currentTrack?._id
      );

      if (currentIndex !== -1 && currentIndex < activeList.length - 1) {
        state.currentTrack = activeList[currentIndex + 1];
        state.isPlaying = true;
      }
    },
    setPrevTrack: (state) => {
      const activeList = state.isShuffle
        ? state.shuffledPlaylist
        : state.playlist;

      if (!state.currentTrack || activeList.length === 0) return;

      const currentIndex = activeList.findIndex(
        (track) => track._id === state.currentTrack?._id
      );

      if (currentIndex > 0) {
        state.currentTrack = activeList[currentIndex - 1];
        state.isPlaying = true;
      }
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  setPlaylist,
  toggleShuffle,
  setNextTrack,
  setPrevTrack,
} = trackSlice.actions;

export default trackSlice.reducer;
