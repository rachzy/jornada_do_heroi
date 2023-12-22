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
        fontWeight: 300,
    },
    body2: {
        fontWeight: 500,
    },
    h3: {
      textTransform: "uppercase",
      fontStyle: "italic",
      fontWeight: 700,
      color: "rgba(255, 255, 255, 0.50)"
    }
  },
});
