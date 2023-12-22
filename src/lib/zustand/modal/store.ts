import { create } from "zustand";

interface State {
  active: boolean;
  calculationFinished: boolean;
  winnerId: number;
}

interface Action {
  setActive: (value: boolean) => void;
  toggleActive: () => void;
  setCalculationFinished: (value: boolean) => void;
  setWinnerId: (value: number) => void;
}

export const useModalStore = create<State & Action>((set) => ({
  active: false,
  calculationFinished: false,
  winnerId: 0,
  setActive: (value) => set(() => ({ active: value, winnerId: 0 })),
  toggleActive: () => set((state) => ({ active: !state.active })),
  setCalculationFinished: (value) =>
    set(() => ({ calculationFinished: value })),
  setWinnerId: (value: number) => set(() => ({ winnerId: value })),
}));
