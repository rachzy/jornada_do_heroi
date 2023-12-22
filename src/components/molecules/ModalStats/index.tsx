import ModalStatsBox from "@/components/atoms/ModalStatsBox";
import { IMetahuman } from "@/interfaces/Metahuman";
import { useModalStore } from "@/lib/zustand/modal/store";
import { powerStateColorPicker } from "@/utils/PowerState.utils";
import { Box, Typography } from "@mui/material";

interface IProps {
  metahumans: [IMetahuman | null, IMetahuman | null];
}

export default function ModalStats({ metahumans }: IProps) {
  const calculationFinished = useModalStore(
    (state) => state.calculationFinished
  );

  function renderPowerStatsLabels() {
    return Object.keys(powerStateColorPicker).map((key: string) => (
      <Typography
        key={key}
        variant={"body1"}
        sx={{ textTransform: "capitalize" }}
      >
        {key}
      </Typography>
    ));
  }

  function renderFinalPowercountLabel() {
    if (!calculationFinished) return null;

    return <Typography variant={"body2"}>Powercount</Typography>;
  }

  if (!metahumans[0] || !metahumans[1]) return null;

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: { xs: 5, md: 20 },
      }}
    >
      <ModalStatsBox
        selectorId={0}
        metahuman={metahumans[0]}
        compare={metahumans[1]}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {renderPowerStatsLabels()} {renderFinalPowercountLabel()}
      </Box>
      <ModalStatsBox
        selectorId={1}
        metahuman={metahumans[1]}
        compare={metahumans[0]}
      />
    </Box>
  );
}
