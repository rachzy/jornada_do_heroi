import { createTheme } from "@mui/material";

export const frameTheme = createTheme({
  palette: {
    primary: {
      main: "#FF7A00",
    },
  },
  typography: {
    h5: {
      fontFamily: "Poppins",
      fontWeight: 300,
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.50)",
    },
  },
});
