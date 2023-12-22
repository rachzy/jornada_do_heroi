import { createTheme } from "@mui/material";

export const modalTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textAlign: "center",
      fontSize: 20,
      lineHeight: 2,
    },
    body1: {
      fontSize: 20,
      fontWeight: 300,
    },
    body2: {
      fontSize: 20,
      fontWeight: 500,
    },
    h2: {
      fontSize: 32,
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      textTransform: "uppercase",
      fontStyle: "italic",
      fontWeight: 700,
      color: "rgba(255, 255, 255, 0.50)",
    },
  },
});
