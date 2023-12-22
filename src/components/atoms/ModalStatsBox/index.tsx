import { IMetahuman } from "@/interfaces/Metahuman";
import { useModalStore } from "@/lib/zustand/modal/store";
import { useSelectorStore } from "@/lib/zustand/selector/store";
import { Box, SxProps, Typography } from "@mui/material";
import CountUp from "react-countup";

interface IProps {
  selectorId: 0 | 1;
  metahuman: IMetahuman;
  compare: IMetahuman;
}

const statsBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export default function ModalStatsBox({
  selectorId,
  metahuman,
  compare,
}: IProps) {
  const calculationFinished = useModalStore(
    (state) => state.calculationFinished
  );
  const setCalculationFinished = useModalStore(
    (state) => state.setCalculationFinished
  );
  const totalMetahumanPowers = useSelectorStore(
    (state) => state.totalMetahumanPowers
  );

  function renderPowerStatsValues() {
    return Object.entries(metahuman.powerstats).map((entry, index) => {
      const [key, value] = [entry[0], entry[1]];
      const comparableValue =
        compare.powerstats[key as keyof typeof compare.powerstats];

      let color = value >= comparableValue ? "chartreuse" : "red";

      return (
        <Typography key={key} variant={"body2"}>
          <CountUp
            start={0}
            end={value}
            duration={3}
            style={{ color: calculationFinished ? color : "white" }}
            delay={0.5}
            // In order to avoid overloading the state store, only the first element
            // of the array will manage the calculation status
            onStart={() => {
              if (index === 0) setCalculationFinished(false);
            }}
            onEnd={() => {
              if (index === 0) setCalculationFinished(true);
            }}
          />
        </Typography>
      );
    });
  }

  function renderFinalPowerCount() {
    if (!calculationFinished) return null;
    return (
      <Typography variant={"body2"} color={"violet"}>
        {totalMetahumanPowers[selectorId]}
      </Typography>
    );
  }

  return (
    <Box sx={statsBoxStyle}>
      {renderPowerStatsValues()} {renderFinalPowerCount()}
    </Box>
  );
}
