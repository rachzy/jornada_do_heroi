import { TPowerStats } from "@/interfaces/PowerStats";
import classes from "./MetahumanBox.module.css";

import { IMetahuman } from "@/interfaces/Metahuman";
import { metahumanTheme } from "@/themes/Metahuman.theme";
import { powerStateIconPicker } from "@/utils/PowerState.utils";
import { Box, Card, Grid, ThemeProvider, Typography } from "@mui/material";
import { useSelectorStore } from "@/lib/zustand/selector/store";
import Image from "next/image";
import { useMetahumansStore } from "@/lib/zustand/metahumans/store";

export default function MetahumanBox({ metahuman }: { metahuman: IMetahuman }) {
  const { id, name, image, powerstats } = metahuman;

  const metahumans = useMetahumansStore((state) => state.metahumans);
  const setMetahuman = useSelectorStore((state) => state.setSelectedMetahuman);
  const toggleSelector = useSelectorStore((state) => state.toggleSelector);
  const currentSelector = useSelectorStore((state) => state.currentSelector);

  const statsToBeDisplayed: TPowerStats[] = [
    "Durability",
    "Power",
    "Speed",
    "Intelligence",
  ];

  function renderStats(): JSX.Element[] {
    return statsToBeDisplayed.map((stat) => (
      <Grid
        item
        xs={6}
        key={stat}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          powerStateIconPicker[
            stat.toLowerCase() as keyof typeof powerStateIconPicker
          ]
        }
        <Typography variant="body1" component="p" marginLeft={0.5}>
          {powerstats[stat.toLowerCase() as keyof typeof powerstats]}
        </Typography>
      </Grid>
    ));
  }

  function handleClick() {
    const newMetahuman = metahumans.find((mh) => mh.id === id);
    setMetahuman(newMetahuman!);

    window.scrollTo(0, 0);
    
    if (currentSelector === 1) return;
    toggleSelector();
  }

  return (
    <Grid item xs={12} sm={6} md={3} padding={1} onClick={handleClick}>
      <ThemeProvider theme={metahumanTheme}>
        <Card className={classes.metahuman}>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Image src={image.url || ""} alt="" width={130} height={200} />
          </Box>
          <Typography variant="h5">{name}</Typography>
          <Grid container rowGap={1} marginY={2}>
            {renderStats()}
          </Grid>
          <Typography variant="body2" marginY={2}>
            Click to select
          </Typography>
        </Card>
      </ThemeProvider>
    </Grid>
  );
}
