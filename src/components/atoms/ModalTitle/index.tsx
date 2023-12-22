import { useModalStore } from "@/lib/zustand/modal/store";
import { useSelectorStore } from "@/lib/zustand/selector/store";
import { Typography } from "@mui/material";
import React from "react";

export default function ModalTitle() {
  const metahumans = useSelectorStore((state) => state.selectedMetahumans);
  const winnerId = useSelectorStore((state) => state.winnerId);
  const calculationFinished = useModalStore(
    (state) => state.calculationFinished
  );

  function renderTitle() {
    if (calculationFinished) {
      const winner = metahumans.find((metahuman) => metahuman!.id === winnerId);

      return (
        <Typography variant={"h2"} color={"chartreuse"}>
          {winner?.name}{" "}
          <span style={{ textTransform: "lowercase", fontWeight: 300 }}>
            wins
          </span>
        </Typography>
      );
    }
    
    return (
      <Typography variant={"h2"} marginY={2}>
        {metahumans[0]!.name}
        <span style={{ marginInline: 10 }}>x</span>
        {metahumans[1]!.name}
      </Typography>
    );
  }
  return renderTitle();
}
