import { useSelectorStore } from "@/lib/zustand/selector/store";
import classes from "./Frame.module.css";

import { frameTheme } from "@/themes/Frame.theme";
import { ThemeProvider, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function Frame({
  selectorId,
  image,
}: {
  selectorId: 0 | 1;
  image?: string | StaticImageData;
}) {
  const currentSelectorId = useSelectorStore((state) => state.currentSelector);
  const setSelector = useSelectorStore((state) => state.setSelector);

  function renderImage(): JSX.Element {
    if (image) {
      return <Image className={classes.frame} src={image} width={128} height={128} alt="" />;
    }
    return <Typography variant="h5">Select a metahuman...</Typography>;
  }

  function handleClick() {
    setSelector(selectorId);
  }

  return (
    <ThemeProvider theme={frameTheme}>
      <div
        className={`${classes.frameBox} ${
          currentSelectorId === selectorId && classes.active
        }`}
        onClick={handleClick}
      >
        {renderImage()}
      </div>
    </ThemeProvider>
  );
}
