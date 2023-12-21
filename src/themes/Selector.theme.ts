import { createTheme } from "@mui/material";

export const selectorTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
    h6: {
      alignSelf: "center",
      lineHeight: 0,
      marginTop: 20,
      fontWeight: 600,
      fontStyle: "italic",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.50)",
    },
  },
});
