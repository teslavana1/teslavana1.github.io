import { Grid } from "@mui/material";
import React from "react";

export default function AppAboutImage ({imageUrl, side}) {
    return(
        <Grid item container justifyContent='center' alignItems='center' minHeight='calc(100vh - 56px)' height={{xs:'calc(100vh - 56px)', md:'100%', lg: 'calc(100vh - 56px)'}} overflow='hidden' sx={{translate: {xs: side}}}>
        <img src={imageUrl} alt='' height='100%' width='100%' style={{objectFit: 'cover', 
        position: {md: 'absolute'}, right: {md: side},
        // translate: {xs: side, md: null}
        }} />
        </Grid>
    )
}