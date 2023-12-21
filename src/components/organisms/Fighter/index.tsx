import Selector from "@/components/molecules/Selector";
import { Box, Button } from "@mui/material";

import Saitama from "../../../assets/saitama.png";
import Versus from "../../../assets/versus.png";

import Image from "next/image";

export default function Fighter() {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} marginY={5}>
      <Box display={"flex"} alignItems={"center"} columnGap={10}>
        <Selector
          data={{
            title: "Saitama",
            image: Saitama,
            powerStats: [
              { label: "Combat", value: 100 },
              { label: "Speed", value: 100 },
              { label: "Intelligence", value: 100 },
              { label: "Strength", value: 100 },
              { label: "Durability", value: 100 },
              { label: "Power", value: 100 },
            ],
          }}
        />
        <Image src={Versus} alt="versus" width={128} />
        <Selector reverse />
      </Box>
      <Button>FIGHT!</Button>
    </Box>
  );
}
