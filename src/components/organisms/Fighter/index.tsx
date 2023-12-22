import Selector from "@/components/molecules/Selector";
import { Box, Button, ThemeProvider } from "@mui/material";

import Saitama from "../../../assets/saitama.png";
import Versus from "../../../assets/versus.png";

import Image from "next/image";
import { fighterTheme } from "@/themes/Fighter.theme";
import { useSelectorStore } from "@/lib/zustand/selector/store";
import { useModalStore } from "@/lib/zustand/modal/store";

export default function Fighter() {
  const selectedMetahumans = useSelectorStore(
    (state) => state.selectedMetahumans
  );
  const setWarnings = useSelectorStore((state) => state.setWarnings);
  const calculateWinner = useSelectorStore((state) => state.calculateWinner);
  const setModal = useModalStore((state) => state.setActive);

  function handleButtonClick() {
    let newWarningValues = selectedMetahumans.map(
      (metahuman) => !Boolean(metahuman)
    ) as [boolean, boolean];
    setWarnings(newWarningValues);

    if (newWarningValues.includes(true)) return;
    setModal(true);
    calculateWinner();
  }

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
          <Selector selectorId={0} metahuman={selectedMetahumans[0]} />
          <Image src={Versus} alt="versus" width={128} />
          <Selector selectorId={1} metahuman={selectedMetahumans[1]} reverse />
        </Box>
        <Box sx={{ width: 300, maxWidth: "100%", marginY: { xs: 14, sm: 5 } }}>
          <Button variant="contained" fullWidth onClick={handleButtonClick}>
            FIGHT!
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
