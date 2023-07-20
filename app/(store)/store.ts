import { create } from "zustand";

export interface viewState {
  arr: boolean;
  amount: number;
  arrToTiles: () => void;
  tilesToArr: () => void;
}

export const useStore = create<viewState>((set) => ({
  arr: true,
  amount: 0,
  arrToTiles: () => set((state) => ({ arr: false })),
  tilesToArr: () => set((state) => ({ arr: true })),
}));
