import { IMetahuman } from "@/interfaces/Metahuman";
import { Box, SxProps, Typography } from "@mui/material";
import { SetStateAction } from "react";
import CountUp from "react-countup";

interface IProps {
  metahuman: IMetahuman;
  compare: IMetahuman;
  allowCustomColor: boolean;
  setAllowCustomColor: React.Dispatch<SetStateAction<boolean>>;
}

const statsBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export default function ModalStatsBox({
  metahuman,
  compare,
  allowCustomColor,
  setAllowCustomColor,
}: IProps) {
  function renderPowerStatsValues() {
    return Object.entries(metahuman.powerstats).map((entry) => {
      const [key, value] = [entry[0], entry[1]];
      const comparableValue =
        compare.powerstats[key as keyof typeof compare.powerstats];

      let color = value >= comparableValue ? "chartreuse" : "red";

      return (
        <CountUp
          key={key}
          start={0}
          end={value}
          duration={3}
          delay={0.5}
          onStart={() => {
            if (allowCustomColor) setAllowCustomColor(false);
          }}
          onEnd={() => {
            if (!allowCustomColor) setAllowCustomColor(true);
          }}
        >
          {({ countUpRef }) => (
            <Typography
              variant={"body2"}
              color={allowCustomColor ? color : "white"}
              ref={countUpRef}
            >
              {value}
            </Typography>
          )}
        </CountUp>
      );
    });
  }

  return <Box sx={statsBoxStyle}>{renderPowerStatsValues()}</Box>;
}
