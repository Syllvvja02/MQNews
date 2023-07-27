import { create } from "zustand";

export interface viewState {
  arr: boolean;
  amount: number;
  arrToTiles: () => void;
  tilesToArr: () => void;
  setAmount: (a: number) => void;
}

export const useStore = create<viewState>((set) => ({
  arr: true,
  amount: 0,
  arrToTiles: () => set((state) => ({ arr: false })),
  tilesToArr: () => set((state) => ({ arr: true })),
  setAmount: (a: number) => set((state) => ({ amount: a })),
}));
