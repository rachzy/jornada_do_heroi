import Frame from "@/components/atoms/Frame";
import PowerStats from "@/components/atoms/PowerStats";
import { IPowerStats } from "@/interfaces/PowerStats";
import { selectorTheme } from "@/themes/Selector.theme";
import {
  powerStateColorPicker,
  powerStateIconPicker,
} from "@/utils/PowerState.utils";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { StaticImageData } from "next/image";

interface IProps {
  data?: {
    title: string;
    image: string | StaticImageData;
    powerStats: IPowerStats[];
  };
  reverse?: boolean;
}

export default function Selector({ data, reverse }: IProps) {
  function renderPowerStats() {
    return data?.powerStats.map((powerStat) => (
      <PowerStats
        key={powerStat.label}
        color={powerStateColorPicker[powerStat.label.toLowerCase()]}
        icon={powerStateIconPicker[powerStat.label.toLowerCase()]}
        {...powerStat}
      />
    ));
  }

  function renderIfData() {
    if (data) {
      return (
        <Grid container rowGap={2}>
          {renderPowerStats()}
        </Grid>
      );
    }
  }

  return (
    <ThemeProvider theme={selectorTheme}>
      <Box
        sx={{ display: "flex", flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Frame image={data?.image} active={Boolean(data)} />
          <Typography variant="h6" component="p">
            {data?.title || ""}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
