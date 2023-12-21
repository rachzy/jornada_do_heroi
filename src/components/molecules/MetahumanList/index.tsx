import MetahumanBox from "@/components/atoms/MetahumanBox";
import { IMetahuman } from "@/interfaces/Metahuman";
import { Grid } from "@mui/material";

export default function MetahumanList({
  metahumans,
}: {
  metahumans: IMetahuman[];
}) {
  function renderMetahumans(): JSX.Element[] {
    return metahumans.map((metahuman) => (
      <MetahumanBox key={metahuman.id} metahuman={metahuman} />
    ));
  }
  return (
    <Grid container spacing={6} marginY={5}>
      {renderMetahumans()}
    </Grid>
  );
}
