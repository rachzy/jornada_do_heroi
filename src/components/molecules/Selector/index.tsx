import Frame from "@/components/atoms/Frame";
import PowerStats from "@/components/atoms/PowerStats";
import { IPowerStats, Stats } from "@/interfaces/PowerStats";
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
    if (data) {
      return data.powerStats.map((powerStat) => (
        <PowerStats
          key={powerStat.label}
          color={powerStateColorPicker[powerStat.label.toLowerCase() as Stats]}
          icon={powerStateIconPicker[powerStat.label.toLowerCase()]}
          {...powerStat}
        />
      ));
    }

    return Object.keys(powerStateColorPicker).map((key: Stats) => {
      return (
        <PowerStats
          key={key}
          color={powerStateColorPicker[key.toLowerCase()]}
          icon={powerStateIconPicker[key.toLowerCase()]}
          label={key}
          value={0}
        />
      );
    });
  }

  return (
    <ThemeProvider theme={selectorTheme}>
      <Box
        sx={{
          display: "flex",
          alignItems: {
            xs: "center",
            sm: "start",
          },
          flexDirection: {
            xs: "column",
            sm: reverse ? "row-reverse" : "row",
          },
          columnGap: 2,
          rowGap: 4,
        }}
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
        <Grid
          container
          sx={{ width: { xs: "100%", sm: 200, md: 150 } }}
          height={200}
          gap={1}
        >
          {renderPowerStats()}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
