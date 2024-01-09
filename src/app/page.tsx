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
      const { data } = await Axios.get(
        `/api`,
      );

      setMetahumans(data);
      setLoading(false);
    }
    fetchMetahumans();
  }, [setMetahumans, setLoading]);

  return <HomeTemplate />;
}
