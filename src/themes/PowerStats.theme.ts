import { createTheme } from "@mui/material";

export const powerStatsTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      fontWeight: 500,
    },
    body1: {
      fontSize: 13,
      fontStyle: "italic",
      color: "rgba(255, 255, 255, 0.50)",
      marginLeft: 5,
      textTransform: "capitalize",
    },
  },
});
