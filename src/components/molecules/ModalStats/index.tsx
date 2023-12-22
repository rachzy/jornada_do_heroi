import ModalStatsBox from "@/components/atoms/ModalStatsBox";
import { IMetahuman } from "@/interfaces/Metahuman";
import { powerStateColorPicker } from "@/utils/PowerState.utils";
import { Box, Typography } from "@mui/material";
import { SetStateAction } from "react";

interface IProps {
  metahumans: [IMetahuman | null, IMetahuman | null];
  allowCustomColor: boolean;
  setAllowCustomColor: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalStats({
  metahumans,
  allowCustomColor,
  setAllowCustomColor,
}: IProps) {
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

  if (!metahumans[0] || !metahumans[1]) return null;

  return (
    <Box sx={{ display: "flex", columnGap: 20 }}>
      <ModalStatsBox
        metahuman={metahumans[0]}
        compare={metahumans[1]}
        allowCustomColor={allowCustomColor}
        setAllowCustomColor={setAllowCustomColor}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {renderPowerStatsLabels()}
      </Box>
      <ModalStatsBox
        metahuman={metahumans[1]}
        compare={metahumans[0]}
        allowCustomColor={allowCustomColor}
        setAllowCustomColor={setAllowCustomColor}
      />
    </Box>
  );
}
