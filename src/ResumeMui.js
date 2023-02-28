import React from "react";
import cover from "./canyon-min.jpg";
import Skills from "./SkillsMui";
import Experience from "./ExperienceMui";
import Education from "./EducationMui";
import About from "./AboutMui";
import Contact from "./ContactMui";
import { Grid, Typography } from "@mui/material";
import Footer from "./Footer";
import PortfolioCard2 from "./PortfolioCard copy";
import { blue } from "material-ui-colors";
import products from "./MechanicalSeeds";
import { Stack } from "@mui/system";
import Certifications from "./CertificationsMui";

export default function Resume() {
//   const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //     setOpen(true);
  //   };

//   const handleClose = (evt) => {
//     evt.preventDefault();
//     setOpen(false);
//   };

  return (
    <Grid container direction="column" rowGap={4}>
      <Grid
        container
        item
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        py={4}
        bgcolor="#f3f3f3"
        maxWidth="100vw"
        rowGap={4}
        // px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
      >
        <Grid
          container
          item
          direction="column"
          xs={12}
          lg={4}
          order={1}
          //   py={2}
          px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
          alignItems="flex-start"
        >
          <Grid container item width="100%" mb={2}>
            <img
              src={cover}
              style={{
                borderRadius: ".5rem",
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
              alt=""
            />
          </Grid>
          <Typography fontSize="2.75rem" fontWeight={700} noWrap>
            Andrew Gay
          </Typography>
          <Typography fontSize="1.4rem">Senior Mechanical Engineer</Typography>
        </Grid>

        <Grid
          container
          item
          direction="column"
          xs={12}
          sm={6}
          lg={4}
          order={{ xs: 1, lg: 2 }}
          //   py={2}
          px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
          alignItems="flex-start"
          rowGap={3}
        >
          <Contact />
        </Grid>

        <Grid
          container
          item
          direction="column"
          xs={12}
          sm={6}
          lg={4}
          order={{ xs: 2, lg: 1 }}
          //   py={2}
          px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
          alignItems="flex-start"
          rowGap={3}
        >
          <About />
        </Grid>
      </Grid>

      <Stack
        direction="column"
        px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
        rowGap={3}
        maxWidth='100vw'
        pb={4}
        sx={{maxWidth: '100vw'}}
      >
        <Typography
          fontSize="1.75rem"
          fontWeight={600}
          color={blue[600]}
        >
          Project Examples
        </Typography>
        <Grid item container direction="row" wrap="nowrap" columnGap={2} overflow='scroll'>
          {products.map((p) => (
              <PortfolioCard2
                key={p.title}
                wide={p.wide}
                src={p.src}
                company={p.company}
                title={p.title}
                body={p.body}
                bullets={p.bullets}
                productUrl={p.productUrl}
              />
            )
          )}
        </Grid>
      </Stack>

<Grid
                container
                item
                direction="row"
                justifyContent={{
                    xs: "center",
                    sm: "space-between",
                    md: "space-evenly",
                }}
                // py={2}
                rowGap={4}
                // px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                mb={8}
                bgcolor="white"
                maxWidth="100vw"
            >
                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    md={6}
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                >
                    <Grid container item direction="row" rowGap={4}>
                        <Grid container item direction="column" xs={12} sm={10} rowGap={3}>
                            <Skills />
                        </Grid>
                        <Grid container item direction="column" xs={12} rowGap={3}>
                            <Education />
                            <Certifications />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    md={6}
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    rowGap={3}
                >
                    <Experience />
                </Grid>
                {/* <Grid container item direction='column' xs={12} md={6} lg={4} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} display={{ xs: 'inline-block', sm: 'none', lg: 'inline-block' }}>
                    <Education />
                </Grid> */}
            </Grid>
            <Footer />
        </Grid>
  );
}
