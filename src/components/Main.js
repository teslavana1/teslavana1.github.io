import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import { Grid } from "@mui/material";
import Footer from "./Footer";
import Cover from "./Cover";
import About from "./About";
import Projects from "./Projects";

export default function Main({theme}) {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true)
    }, [])

    return (
        <Grid container direction="column" bgcolor={theme === 'dark' ? 'black' : 'white'} className="main" rowGap={8} sx={{ opacity: fade && theme ? 1 : 0, 
        transition: 'opacity 1s ease-in-out' 
        }}>
            <Cover theme={theme} fade={fade} />
            <About />

            <Projects theme={theme} />

            <Skills />
            <Footer />
        </Grid>
    );
}
