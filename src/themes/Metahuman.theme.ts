import { createTheme } from "@mui/material";

export const metahumanTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
    h5: {
      fontWeight: 900,
      fontStyle: "italic",
      textTransform: "uppercase",
      textAlign: "center",
    },
    body1: {
      fontWeight: 300,
      fontSize: 20,
    },
    body2: {
      textAlign: "center",
      fontWeight: 700,
      fontStyle: "italic",
      color: "rgba(255, 255, 255, 0.50)",
    },
  },
});
