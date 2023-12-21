"use client";

import Prefix from "@/components/atoms/Prefix";
import Title from "@/components/atoms/Title";
import Fighter from "@/components/organisms/Fighter";
import { homeTheme } from "@/themes/Home.theme";
import { Container, ThemeProvider } from "@mui/material";

export default function HomeTemplate() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <ThemeProvider theme={homeTheme}>
        <Title>
          <Prefix>Meta</Prefix>humans
        </Title>
        <Fighter />
      </ThemeProvider>
    </Container>
  );
}
