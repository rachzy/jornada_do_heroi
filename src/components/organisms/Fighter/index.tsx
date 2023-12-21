import Selector from "@/components/molecules/Selector";
import { Box, Button, ThemeProvider } from "@mui/material";

import Saitama from "../../../assets/saitama.png";
import Versus from "../../../assets/versus.png";

import Image from "next/image";
import { fighterTheme } from "@/themes/Fighter.theme";

export default function Fighter() {
  return (
    <ThemeProvider theme={fighterTheme}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginY={5}
      >
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
            columnGap: 10,
            flexDirection: { xs: "column", md: "row" },
            rowGap: { xs: 10, sm: 3 },
          }}
        >
          <Selector
            data={{
              title: "Saitama",
              image: Saitama,
              powerStats: [
                { label: "Intelligence", value: 100 },
                { label: "Strength", value: 100 },
                { label: "Speed", value: 100 },
                { label: "Durability", value: 100 },
                { label: "Power", value: 100 },
                { label: "Combat", value: 100 },
              ],
            }}
          />
          <Image src={Versus} alt="versus" width={128} />
          <Selector reverse />
        </Box>
        <Box sx={{ width: 300, maxWidth: "100%", marginY: { xs: 14, sm: 5 } }}>
          <Button variant="contained" fullWidth>
            FIGHT!
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
