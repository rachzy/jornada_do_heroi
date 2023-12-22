import { IMetahuman } from "@/interfaces/Metahuman";
import { create } from "zustand";

interface State {
  value: string;
  filteredMetahumans: IMetahuman[];
}

interface Action {
  setValue: (newValue: string) => void;
  setFilteredMetahumans: (metahumans: IMetahuman[]) => void;
}

export const useSearchStore = create<State & Action>((set) => ({
  value: "",
  filteredMetahumans: [],
  setValue: (newValue) => set(() => ({ value: newValue })),
  setFilteredMetahumans: (metahumans) =>
    set(() => ({ filteredMetahumans: metahumans })),
}));
