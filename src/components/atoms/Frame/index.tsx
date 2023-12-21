import classes from "./Frame.module.css";

import { frameTheme } from "@/themes/Frame.theme";
import { Box, ThemeProvider, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function Frame({
  image,
  active,
}: {
  image?: string | StaticImageData;
  active?: boolean;
}) {
  function renderImage(): JSX.Element {
    if (image) {
      return <Image className={classes.frame} src={image} alt="" />;
    }
    return <Typography variant="h5">Select a metahuman...</Typography>;
  }

  return (
    <ThemeProvider theme={frameTheme}>
      <div className={`${classes.frameBox} ${active && classes.active}`}>
        {renderImage()}
      </div>
    </ThemeProvider>
  );
}
