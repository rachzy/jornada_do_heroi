import { create } from "zustand";

interface State {
  active: boolean;
}

interface Action {
  setActive: (value: boolean) => void;
  toggleActive: () => void;
}

export const useModalStore = create<State & Action>((set) => ({
  active: false,
  setActive: (value) => set(() => ({ active: value })),
  toggleActive: () => set((state) => ({ active: !state.active })),
}));
