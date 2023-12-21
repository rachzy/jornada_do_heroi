import { Stats } from "@/interfaces/PowerStats";
import classes from "./MetahumanBox.module.css";

import { IMetahuman } from "@/interfaces/Metahuman";
import { metahumanTheme } from "@/themes/Metahuman.theme";
import { powerStateIconPicker } from "@/utils/PowerState.utils";
import { Box, Card, Grid, ThemeProvider, Typography } from "@mui/material";

export default function MetahumanBox({ metahuman }: { metahuman: IMetahuman }) {
  const { name, images, powerstats } = metahuman;

  const statsToBeDisplayed: Stats[] = [
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

  return (
    <Grid item xs={12} sm={6} md={3} padding={1}>
      <ThemeProvider theme={metahumanTheme}>
        <Card className={classes.metahuman}>
          <Box
            component="img"
            sx={{
              content: {
                xs: `url(${images.xs})`,
                sm: `url(${images.sm})`,
                md: `url(${images.md})`,
                lg: `url(${images.lg})`,
              },
            }}
            alt="metahuman"
            margin={"auto"}
          />
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
