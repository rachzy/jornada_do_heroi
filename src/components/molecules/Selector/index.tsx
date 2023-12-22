import Frame from "@/components/atoms/Frame";
import PowerStats from "@/components/atoms/PowerStats";
import { IMetahuman } from "@/interfaces/Metahuman";
import { TPowerStats } from "@/interfaces/PowerStats";
import { selectorTheme } from "@/themes/Selector.theme";
import {
  powerStateColorPicker,
  powerStateIconPicker,
} from "@/utils/PowerState.utils";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";

interface IProps {
  selectorId: 0 | 1;
  metahuman: IMetahuman | null;
  reverse?: boolean;
}

export default function Selector({ selectorId, metahuman, reverse }: IProps) {
  function renderPowerStats() {
    if (metahuman) {
      const displayedPowerstats: TPowerStats[] = [
        "Intelligence",
        "Strength",
        "Speed",
        "Durability",
        "Power",
        "Combat",
      ];
      return displayedPowerstats.map((powerStat) => (
        <PowerStats
          key={powerStat}
          color={
            powerStateColorPicker[
              powerStat.toLowerCase() as keyof typeof powerStateColorPicker
            ]
          }
          icon={
            powerStateIconPicker[
              powerStat.toLowerCase() as keyof typeof powerStateColorPicker
            ]
          }
          label={powerStat}
          value={
            metahuman.powerstats[
              powerStat.toLowerCase() as keyof typeof metahuman.powerstats
            ]
          }
        />
      ));
    }

    return Object.keys(powerStateColorPicker).map((key) => {
      return (
        <PowerStats
          key={key}
          color={
            powerStateColorPicker[
              key.toLowerCase() as keyof typeof powerStateColorPicker
            ]
          }
          icon={
            powerStateIconPicker[
              key.toLowerCase() as keyof typeof powerStateColorPicker
            ]
          }
          label={key as TPowerStats}
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
          <Frame image={metahuman?.image.url} selectorId={selectorId} />
          <Typography variant="h6" component="p">
            {metahuman?.name || ""}
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
