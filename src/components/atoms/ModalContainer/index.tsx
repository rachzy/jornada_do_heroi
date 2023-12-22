import { Box, SxProps } from "@mui/material";

const modalContainerStyle: SxProps = {
  position: "absolute",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 3,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 4,
  backgroundColor: "#1a1a1a",
};

export default function ModalContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={modalContainerStyle}>{children}</Box>;
}
