import { Box, SxProps } from "@mui/material";
import React from "react";

const modalContentStyle: SxProps = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
};

export default function ModalContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={modalContentStyle}>{children}</Box>;
}
