import { IMetahuman } from "@/interfaces/Metahuman";
import { create } from "zustand";

interface State {
  selectedMetahumans: [IMetahuman | null, IMetahuman | null];
  warnings: [boolean, boolean];
  currentSelector: 0 | 1;
}

interface Action {
  setSelectedMetahuman: (metahuman: IMetahuman) => void;
  setSelector: (value: State["currentSelector"]) => void;
  setWarnings: (values: State["warnings"]) => void;
  toggleSelector: () => void;
}

export const useSelectorStore = create<State & Action>((set) => ({
  selectedMetahumans: [null, null],
  warnings: [false, false],
  currentSelector: 0,
  setSelectedMetahuman: (metahuman) =>
    set((state) => {
      let newSelections: State["selectedMetahumans"] = [
        ...state.selectedMetahumans,
      ];
      newSelections[state.currentSelector] = metahuman;
      return { selectedMetahumans: newSelections };
    }),
  setSelector: (value) => set(() => ({ currentSelector: value })),
  setWarnings: (values) => set(() => ({ warnings: values })),
  toggleSelector: () =>
    set((state) => ({ currentSelector: state.currentSelector === 1 ? 0 : 1 })),
}));
