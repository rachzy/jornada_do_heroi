import { Box, SxProps } from "@mui/material";

const modalContainerStyle: SxProps = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 4,
  backgroundColor: "#1a1a1a",
  width: {
    xs: "90%",
    md: "fit-content"
  },
  maxHeight: "80vh",
  overflowX: "hidden",
  overflowY: {
    sx: "scroll",
    md: "hidden"
  },
};

export default function ModalContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={modalContainerStyle}>{children}</Box>;
}
