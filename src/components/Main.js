import React, { useEffect, useState } from "react";
import cover from "../images/canyon-min.jpg";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import Footer from "./Footer";
// import PortfolioCard from './PortfolioCard';
// import PortfolioCard2 from './PortfolioCard copy';
import { blue } from "material-ui-colors";
// import products from './MechanicalSeeds';
import websites from "../seeds/MechanicalSeeds";
// import PortfolioCard3 from './PortfolioCard copy 2';
// import CardContainer from './CardContainer';
// import InfoDialog from "./InfoDialog";
import SoftwareCard from "./SoftwareCard";
import { GitHub, LinkedIn, Mail, MailOutline, Phone, PhoneOutlined } from "@mui/icons-material";
import { Stack } from "@mui/system";
import Cover from "./Cover";
import About from "./About";
import Projects from "./Projects";

export default function Main() {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null);
    const [fade, setFade] = useState(false);

    const handleClickOpen = (details) => {
        setDetails(details);
        setOpen(true);
    };

    const handleClose = (evt) => {
        evt.preventDefault();
        setDetails(null);
        setOpen(false);
    };

    useEffect(() => {
        setFade(true)
    }, [])

    return (
        <Grid container direction="column" rowGap={8} sx={{ opacity: fade ? 1 : 0, transition: '1s' }}>
            <Cover />
            <About />

            <Projects />

            <Skills />
            <Footer />
        </Grid>
    );
}
