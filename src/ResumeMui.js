import React from 'react'
import cover from './canyon-min.jpg'
import Skills from './SkillsMui';
import Experience from './ExperienceMui';
import Education from './EducationMui';
import About from './AboutMui';
import Contact from './ContactMui';
import { Grid, Typography } from '@mui/material';
import Footer from './Footer';

export default function Resume() {
    return (
        <>
            <Grid container item direction='row' alignItems='flex-start' justifyContent='space-between' py={2} bgcolor='#f3f3f3'>
                <Grid container item direction='column' xs={12} lg={4} order={1} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} alignItems='flex-start'>
                    <Grid container item width='100%'>
                        <img src={cover} style={{borderRadius: '.5rem', width: '100%', height: '320px', objectFit: 'cover'}} alt="" />
                    </Grid>
                    <Typography sx={{ fontSize: '2.75rem', fontWeight: 700 }}>
                        Andrew Gay
                    </Typography>
                    <Typography sx={{ fontSize: '1.4rem' }}>
                        Software Engineer
                    </Typography>
                </Grid>

                <Grid container item direction='column' xs={12} sm={6} lg={4} order={{ xs: 1, lg: 2 }} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} alignItems='flex-start' className="about">
                    <Contact />
                </Grid>

                <Grid container item direction='column' xs={12} sm={6} lg={4} order={{ xs: 2, lg: 1 }} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} alignItems='flex-start' className="about">
                    <About />
                </Grid>

            </Grid>
            <Grid container item direction='row' justifyContent={{ xs: 'center', sm: 'space-between', md: 'space-evenly' }} py={2} mb={4} bgcolor='white'>
                <Grid container item direction='column' xs={12} md={6} lg={4} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} className="skills">
                    <Grid container item direction='row' className='row'>
                        <Grid container item direction='column' pl={0} pr={{ xs: 0, sm: 2, md: 0 }} xs={12} sm={6} md={12} pb={{ md: 2 }}>
                            <Skills />
                        </Grid>
                        <Grid container item direction='column' pr={0} pl={{ xs: 0, sm: 2, md: 0 }} xs={12} sm={6} md={12} display={{ xs: 'none', sm: 'inline-block', lg: 'none' }} py={{ md: 2 }}>
                            <Education />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction='column' xs={12} md={6} lg={4} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }}>
                    <Experience />
                </Grid>
                <Grid container item direction='column' xs={12} md={6} lg={4} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} display={{ xs: 'inline-block', sm: 'none', lg: 'inline-block' }}>
                    <Education />
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}