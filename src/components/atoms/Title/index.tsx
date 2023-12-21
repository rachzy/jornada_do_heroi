import { Typography } from "@mui/material";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant={"h3"} component={"h1"} textAlign={"center"}>
      {children}
    </Typography>
  );
}
