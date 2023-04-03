import { GitHub, LinkedIn, MailOutline, PhoneOutlined } from "@mui/icons-material";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function About() {
  return (
    <Grid container item justifyContent='center'>
      <Grid container item direction='column' xs={11} md={7} gap={2} textAlign='center'>
        <Typography variant="body1">
          I’m a Senior Mechanical Engineer with 8+ years of new product
          development and sustaining experience. Thoughout my career, I have
          designed 20+ products from concept to production and managed teams for
          several sustaining projects. These products included sheet metal and
          plastic injection molding design, PCA layout, and design verification
          testing.
        </Typography>
        <Typography variant="body1">
          I enjoy learning new skills and honing them through real-world
          applications. I’m excited to apply my mechanical engineering and product
          development experience to the next phase of my career.
        </Typography>
        <Typography variant="body1">
          If you'd like to learn more about my background, <Link color="primary" href="https://drive.google.com/uc?export=download&id=1MX4ZWU4RNRpj3mL2C9uz_dYX0p7O8GvX" sx={{ textDecoration: 'none' }} >check out my resume!</Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
