import { Grid, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <Grid container item justifyContent='center'>
      <Grid container item direction='column' xs={11} md={7} gap={2} textAlign='center'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: 2 }}>
          <Stack spacing={2}>
            <Typography variant="body1">
              I’m a Senior Mechanical Engineer with over 11 years of new product
              development and sustaining experience. Thoughout my career, I have
              designed more than 20 products from concept to production and managed teams for
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
              If you'd like to learn more about my background, <Link fontWeight={700} color="primary" href="https://drive.google.com/uc?view&id=1Ma-I8uRJlIQbACOQr7QoCEX76hiGXsXX" sx={{ textDecoration: 'none' }}>check out my resume!</Link>
            </Typography>
          </Stack>
        </motion.div>
      </Grid>
    </Grid>
  );
}
