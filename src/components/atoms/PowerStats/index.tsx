import { IPowerStats } from "@/interfaces/PowerStats";
import { powerStatsTheme } from "@/themes/PowerStats.theme";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";

interface IProps extends IPowerStats {
  icon: React.ReactNode;
  color: string;
}

export default function PowerStats({ label, value, icon, color }: IProps) {
  return (
    <ThemeProvider theme={powerStatsTheme}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(217, 217, 217, 0.20)",
          padding: 2,
        }}
      >
        <Box display={"flex"} alignItems={"center"} flex={1}>
          {icon}
          <Typography variant="body1" component="p">
            {label}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Typography variant="body2" component="p" sx={{ color }}>
            {value}
          </Typography>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
