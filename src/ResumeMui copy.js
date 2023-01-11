import React from 'react'
import './Resume.css'
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
        <Grid container rowSpacing={{lg: 4}} mb={2} height='100%'>
            <Grid container item direction='row' px={{ xs: 2, sm: 2, md: 4, xl: 5 }} rowGap={4} columnSpacing={8} bgcolor='#f3f3f3' pt={4} pb={{xs: 2, lg:4}} mt={{xs: 0, lg: 4}}>
                <Grid container item direction='column' xs={12} lg order={1}>
                    <Grid container item width='100%'>
                        <img src={cover}
                            className='headshot roundedCorners mb-3' alt="" />
                    </Grid>
                    <Typography sx={{fontSize: '2.75rem', fontWeight: 700}} marginBottom='auto' className="name">Andrew Gay</Typography>
                    <Typography sx={{fontSize: '1.4rem'}} marginBottom='auto' className="name">Software Engineer</Typography>
                </Grid>

                <Grid container item direction='column' xs={12} sm lg order={{ xs: 1, lg: 2 }}>
                    <Contact />
                </Grid>

                <Grid container item direction='column' xs={12} sm lg order={{ xs: 2, lg: 1 }} alignItems='flex-start'>
                    <About />
                </Grid>

            </Grid>
            <Grid container item direction='row' 
            // justifyContent={{ xs: 'center', sm: 'space-between', md: 'space-evenly' }} 
            pb={4} pt={{xs: 2, lg: 4}} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} bgcolor='white' rowGap={4} columnSpacing={8}>
                <Grid container item direction='row' xs={12} md lg className="skills" rowGap={4} columnSpacing={6}>
                    {/* <Grid container item direction='row' rowGap={4}> */}
                        <Grid container item direction='column' xs={12} sm md>
                            <Skills />
                        </Grid>
                        <Grid container item direction='column' xs={12} sm md={12} display={{ xs: 'none', sm: 'inline-block', lg: 'none' }}>
                            <Education />
                        </Grid>
                    {/* </Grid> */}
                </Grid>
                <Grid container item direction='column' xs={12} md={6} lg={4}>
                    <Experience />
                </Grid>
                <Grid container item direction='column' xs={12} md={6} lg={4} display={{xs: 'inline-block', sm: 'none', lg: 'inline-block'}}>
                    <Education />
                </Grid>
            </Grid>
            </Grid>
            <Footer />
            </>
    )
}