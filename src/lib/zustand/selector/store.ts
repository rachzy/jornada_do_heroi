import { IMetahuman } from "@/interfaces/Metahuman";
import { create } from "zustand";

interface State {
  selectedMetahumans: [IMetahuman | null, IMetahuman | null];
  currentSelector: 0 | 1;
}

interface Action {
  setSelectedMetahuman: (metahuman: IMetahuman) => void;
  setSelector: (value: State["currentSelector"]) => void;
  toggleSelector: () => void;
}

export const useSelectorStore = create<State & Action>((set) => ({
  selectedMetahumans: [null, null],
  currentSelector: 0,
  setSelectedMetahuman: (metahuman) =>
    set((state) => {
      let newSelections: State["selectedMetahumans"] = [...state.selectedMetahumans];
      newSelections[state.currentSelector] = metahuman;
      return { selectedMetahumans: newSelections };
    }),
  setSelector: (value) => set(() => ({ currentSelector: value })),
  toggleSelector: () =>
    set((state) => ({ currentSelector: state.currentSelector === 1 ? 0 : 1 })),
}));
