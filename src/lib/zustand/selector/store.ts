import { IMetahuman } from "@/interfaces/Metahuman";
import { create } from "zustand";

interface State {
  selectedMetahumans: [IMetahuman | null, IMetahuman | null];
  totalMetahumanPowers: [number, number];
  warnings: [boolean, boolean];
  currentSelector: 0 | 1;
  winnerId: number;
}

interface Action {
  setSelectedMetahuman: (metahuman: IMetahuman) => void;
  setSelector: (value: State["currentSelector"]) => void;
  setWarnings: (values: State["warnings"]) => void;
  toggleSelector: () => void;
  calculateWinner: () => void;
}

export const useSelectorStore = create<State & Action>((set) => ({
  selectedMetahumans: [null, null],
  totalMetahumanPowers: [0, 0],
  warnings: [false, false],
  currentSelector: 0,
  winnerId: 0,
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
  calculateWinner: () =>
    set((state) => {
      const powercounts = state.selectedMetahumans.map((metahuman) => {
        let powercount = 0;
        Object.values(metahuman!.powerstats).forEach(
          (value) => (powercount += parseInt(value.toString()))
        );
        return powercount;
      }) as [number, number];

      const indexOfMaxValue = powercounts.reduce(
        (iMax, x, i, powercounts) => (x > powercounts[iMax] ? i : iMax),
        0
      );
      return {
        totalMetahumanPowers: powercounts,
        winnerId: state.selectedMetahumans[indexOfMaxValue]!.id,
      };
    }),
}));
