import { LinkedIn, Mail, Phone } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { blue } from "material-ui-colors"
import React from "react"
import Card from "./Card"
import products from "../seeds/MechanicalSeeds";


export default function Projects() {
    return (
        <Grid
            item
            container
            direction="column"
            px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            rowGap={4}
            alignItems='center'
        >
            <Typography variant='h2'>
                Projects
            </Typography>
            <Grid item container direction="row" wrap="nowrap" columnGap={2} overflow='scroll'>
                {products.map((p) => (
                    <Card
                        key={p.title}
                        {...p}
                    />
                )
                )}
            </Grid>
        </Grid>

    )
}