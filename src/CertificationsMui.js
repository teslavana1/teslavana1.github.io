import { Grid, Link, Typography } from "@mui/material";
import { blue, grey } from "material-ui-colors";
import React from "react";

const items = [
  {
    company: "NCEES",
    title: "Engineer In Training (EIT)",
    date: "April 2013",
    details: "Certification ID: 14-306-44",
    link: "https://account.ncees.org/rn/1430644-616504-c2fd583",
  },
];

export default function Certifications() {
  return (
    <>
      <Typography
        fontSize="1.75rem"
        fontWeight={600}
        width="100%"
        color={blue[600]}
      >
        Certifications
      </Typography>
      <Grid container item wrap="wrap" columnGap={6} rowGap={4}>
        {items.map((item, index) => (
          <Link
            href={item.link && item.link}
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <Grid
              container
              item
              key={item.company}
              direction="column"
              xs={12}
              sm
              md={12}
              lg
              minWidth="40%"
            >
              <Typography noWrap sx={{ fontSize: "1.4rem", fontWeight: "600" }}>
                {item.company}
              </Typography>
              <Grid container item direction="column" rowGap={2}>
                <Grid item key={item.title}>
                  <Typography
                    variant="subtitle1"
                    noWrap
                    fontSize="1rem"
                    fontWeight={400}
                  >
                    {item.title}
                  </Typography>
                  <Typography fontSize="1rem" fontWeight={400}>
                    {item.details}
                  </Typography>
                  <Typography
                    color={grey[600]}
                    fontSize="1rem"
                    fontWeight={400}
                  >
                    {item.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
}
