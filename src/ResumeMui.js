import React, { useState } from 'react'
import cover from './canyon-min.jpg'
import Skills from './SkillsMui';
import Experience from './ExperienceMui';
import Education from './EducationMui';
import About from './AboutMui';
import Contact from './ContactMui';
import { Grid, Typography } from '@mui/material';
import Footer from './Footer';
import PortfolioCard2 from './PortfolioCard copy';
import { blue } from 'material-ui-colors';
import products from './MechanicalSeeds';
import InfoDialog from './InfoDialog';
import ExperienceCard from './ExperienceCard';

export default function Resume() {

    const [open, setOpen] = useState(false)

    const items = [
        {
            company: 'Inseego Corp',
            title: 'Senior Mechanical Engineer',
            info: 'Aug 2020 - Oct 2022',
            details: [
                'Designed 5G wireless device plastic housings and electromechanical assemblies.',
                'Performed environmental and mechanical QA testing to validate production candidates.',
                'Optimized rework process for regulatory testing to increase output by 50%.',
                'Led cross-functional collaboration to simplify designs while maintaining performance.',
                'Managed OEM-designed product development.'
            ]
        },
        {
            company: 'HM Electronics Inc',
            title: 'Senior Mechanical Engineer',
            info: 'Mar 2014 - Aug 2020',
            details: [
                'Served as Lead Mechanical Engineer on several design and sustaining projects simultaneously.',
                'Conducted cost reduction efforts to reduce BOM by 20% and streamline manufacturing.',
                'Led sustaining efforts with root cause analysis and 50+ design improvements to legacy products.',
                'Managed and trained interns with an 80% success rate retaining them as full-time engineers.',
                'Developed product ID and QA test equipment.'
            ]
        }
    ]

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = (evt) => {
        evt.preventDefault()
        setOpen(false);
    };

    return (
        <>
            <Grid container item direction='row' alignItems='flex-start' justifyContent='space-between' py={2} bgcolor='#f3f3f3' maxWidth='100vw'>

                <InfoDialog open={open} handleClose={handleClose} />

                <Grid container item direction='column' xs={12} lg={4} order={1} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} alignItems='flex-start'>
                    <Grid container item width='100%'>
                        <img src={cover} style={{ borderRadius: '.5rem', width: '100%', height: '320px', objectFit: 'cover' }} alt="" />
                    </Grid>
                    <Typography sx={{ fontSize: '2.75rem', fontWeight: 700 }}>
                        Andrew Gay
                    </Typography>
                    <Typography sx={{ fontSize: '1.4rem', opacity: .7 }}>
                        Senior Mechanical Engineer
                    </Typography>
                </Grid>

                <Grid container item direction='column' xs={12} sm={6} lg={4} order={{ xs: 1, lg: 2 }} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} alignItems='flex-start' className="about">
                    <Contact />
                </Grid>

                <Grid container item direction='column' xs={12} sm={6} lg={4} order={{ xs: 2, lg: 1 }} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} alignItems='flex-start' className="about">
                    <About />
                </Grid>
            </Grid>

            <Grid item container direction='column' maxWidth='100vw' px={{ xs: 2, sm: 2, md: 4, xl: 5 }} py={4} zIndex={0}>
                <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}> Project Examples</Typography>
                {/* {items.map(i => ( */}
                    <Grid container item wrap='nowrap' columnGap={2} overflow='scroll'>
                        {/* <ExperienceCard company={i.company} title={i.title} info={i.info} details={i.details} wide={true} /> */}
                        {products.map(p => {
                            return(
                                // p.company === i.company &&
                            <PortfolioCard2 key={p.title} wide={p.wide} src={p.src} company={p.company} title={p.title} body={p.body} bullets={p.bullets} productUrl={p.productUrl} />
                            )
                        }
                        )}
                    </Grid>
                {/* ))} */}

            </Grid>

            {/* <Grid item container direction='column' maxWidth='100vw' px={{ xs: 2, sm: 2, md: 4, xl: 5 }}>
                <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}>Software Portfolio</Typography>
                <Grid container item direction='row' maxWidth='100vw' height='450px' wrap='nowrap' columnGap={2} overflow='scroll'>
                    {websites.map(w => (
                        <PortfolioCard3 key={w.title} wide={w.wide} src={w.src} company={w.company} title={w.title} body={w.body} bullets={w.bullets} productUrl={w.productUrl} view={w.view} details={w.details} github={w.github} />
                    ))}
                </Grid>
            </Grid> */}

            <Grid container item direction='row' justifyContent={{ xs: 'center', sm: 'space-between', md: 'space-evenly' }} py={2} mb={4} bgcolor='white' maxWidth='100vw'>
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