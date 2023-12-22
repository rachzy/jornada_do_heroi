import { IMetahuman } from "@/interfaces/Metahuman";
import { create } from "zustand";

interface State {
  metahumans: IMetahuman[];
  loading: boolean;
}

interface Action {
  setMetahumans: (metahumans: IMetahuman[]) => void;
  setLoading: (value: boolean) => void;
}

export const useMetahumansStore = create<State & Action>((set) => ({
  metahumans: [],
  loading: true,
  setMetahumans: (metahumans) => set(() => ({ metahumans: metahumans })),
  setLoading: (value) => set(() => ({ loading: value })),
}));
