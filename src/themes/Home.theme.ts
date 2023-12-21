import { createTheme } from "@mui/material/styles";

export const homeTheme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
    },
  },
  typography: {
    allVariants: {
      color: "#fffff",
      fontFamily: "Poppins",
    },
    h3: {
      fontWeight: 700,
    },
  },
});
