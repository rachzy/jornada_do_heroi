"use client";

import HomeTemplate from "@/components/templates/Home";
import { IMetahuman } from "@/interfaces/Metahuman";
import { useMetahumansStore } from "@/lib/zustand/metahumans/store";

import Axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const setMetahumans = useMetahumansStore((state) => state.setMetahumans);
  const setLoading = useMetahumansStore((state) => state.setLoading);

  useEffect(() => {
    async function fetchMetahumans() {
      const lookForIds = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 17, 18];
      const metahumans: IMetahuman[] = [];

      for(const id of lookForIds) {
        const { data } = await Axios.get(
          `https://www.superheroapi.com/api.php/2640565762769688/${id}`
        );
        metahumans.push(data);
      }

      setMetahumans(metahumans);
      setLoading(false);
    }
    fetchMetahumans();
  }, [setMetahumans, setLoading]);

  return <HomeTemplate />;
}
