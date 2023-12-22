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
      <Image src={image} width={256} height={324} alt="metahuman" />
      <Typography variant={"h3"}>{name}</Typography>
    </Box>
  );
}
