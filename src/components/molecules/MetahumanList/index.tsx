import Loader from "@/components/atoms/Loader";
import MetahumanBox from "@/components/atoms/MetahumanBox";
import { IMetahuman } from "@/interfaces/Metahuman";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";

export default function MetahumanList({
  metahumans,
}: {
  metahumans: IMetahuman[];
}) {
  const [maxNumberOfElements, setMaxNumberOfElements] = useState(8);

  function renderMetahumans() {
    return metahumans.map((metahuman, index) => {
      if (index >= maxNumberOfElements) return null;
      return <MetahumanBox key={metahuman.id} metahuman={metahuman} />;
    });
  }

  return (
    <Grid container spacing={6} marginY={5}>
      {renderMetahumans()}
      {metahumans.length >= maxNumberOfElements && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginY: 5,
            paddingLeft: 4,
          }}
        >
          <Button
            onClick={() =>
              setMaxNumberOfElements((currentValue) => currentValue + 12)
            }
          >
            Show More
          </Button>
        </Box>
      )}
    </Grid>
  );
}
