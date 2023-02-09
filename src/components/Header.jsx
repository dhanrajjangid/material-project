import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";

export default function BoxSx() {
  return (
    <Grid
      container
      direction="row"
      align-items="center"
      justifyContent="space-between"
      px={2}
    >
      <Grid item>
        <Typography sx={{ fontWeight: "bold" }}>
          Onsite Personalization
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" sx={{ backgroundColor: "#01314B" }}>
          View Report
        </Button>
      </Grid>
    </Grid>
  );
}
