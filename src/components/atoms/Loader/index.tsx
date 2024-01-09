import { Box, CircularProgress, SxProps } from "@mui/material";

export default function Loader({sx}: {sx?: SxProps}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%", ...sx }}>
      <CircularProgress />
    </Box>
  );
}
