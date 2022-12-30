import { Grid, Typography } from "@mui/material";
import React from "react";

export default function AppAboutText({ heading, text, color }) {
    return (
        <Grid item container direction='column' xs={12} md={6} py={2} justifyContent='center' position={{md: 'absolute' }} height={{xs: 'auto', md: '100%' }} px={{xs: 2, md: 6}} zIndex={10} wrap='nowrap'>
            <Typography variant="h4" color={color} marginBottom={3}>
                <b>{heading}</b>
            </Typography>
            {text.map(p => (
                <Typography key={p} variant="body1" color='text.primary' mb={2}>
                    {p}
                </Typography>
            ))}
        </Grid>
    )
}