import { Box, SxProps, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface IProps {
  caption: string;
  image: string | StaticImageData;
}

const frameBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function ModalFrameBox({ caption: name, image }: IProps) {
  return (
    <Box sx={frameBoxStyle}>
      <Box sx={{ display: { xs: "none", md: "block" }, marginTop: 4, }}>
        <Image src={image} width={256} height={324} alt="metahuman" />
      </Box>
      <Typography variant={"h3"}>{name}</Typography>
    </Box>
  );
}
