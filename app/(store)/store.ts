import { create } from "zustand";

export interface viewState {
  arr: boolean;
  arrToTiles: () => void;
  tilesToArr: () => void;
}

export const useStore = create<viewState>((set) => ({
  arr: true,
  arrToTiles: () => set((state) => ({ arr: false })),
  tilesToArr: () => set((state) => ({ arr: true })),
}));
