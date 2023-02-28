import { Chip, Grid } from "@mui/material";
import React from "react";

export default function Skill({ skill }) {
  return (
    <Grid container item maxWidth={{xs: "100px", sm: '30%'}}>
      <Chip
        label={skill}
        variant="outlined"
        sx={{ minWidth: "100%" }}
      />
    </Grid>
  );
}