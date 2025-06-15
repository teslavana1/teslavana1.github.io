import { Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Skill from './Skill'
import inventor from '../images/inventor.png'
import creo from '../images/creo.png'
import solidworks from '../images/solidworks.png'
import illustrator from '../images/illustrator.png'
import autocad from '../images/autocad.png'
import photoshop from '../images/photoshop.png'
import windchill from '../images/windchill.png'
import { useAnimation, motion } from 'framer-motion'


const skills = [
    { name: 'Inventor', icon: inventor },
    { name: 'CREO/ProE', icon: creo },
    { name: 'Solidworks', icon: solidworks },
    { name: 'Illustrator', icon: illustrator },
    { name: 'AutoCAD', icon: autocad },
    { name: 'Photoshop', icon: photoshop },
    { name: 'Windchill', icon: windchill },
    // { name: 'Agile', progress: 60, years: '6.5 years' },
]


export default function Skills() {

    const containerRef = useRef()
    const controls = useAnimation()

    const [animated, setAnimated] = useState(false)

    const animationVariants = {
        hidden: { opacity: 0, scale: .5 },
        visible: { opacity: 1, scale: 1 },
    };

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            controls.start('visible');
            setAnimated(true)
        } else {
            setAnimated(false)
            controls.start('hidden');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Adjust the threshold value as needed
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <Grid
            container
            item
            direction="row"
            justifyContent={{
                xs: "center"
            }}
            rowGap={4}
            bgcolor='transparent'
            width='100%'
            maxWidth="100vw"
        >
            <Grid
                container
                item
                direction="column"
                xs={12}
                md={8}
                rowGap={4}
                px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            >

                <Grid container item direction='row' justifyContent='center'>
                    <Typography variant='h2'>
                        Skills
                    </Typography>
                </Grid>
                <Grid container item columnGap={{ xs: 2, sm: 4 }} rowGap={4} direction='row' justifyContent='center' ref={containerRef}>
                    {skills.map((skill, index) => (
                        <Grid container item rowGap={1} alignItems='center' maxWidth='60px'>
                            <motion.div initial='hidden' animate={controls} transition={{ duration: animated ? .1 : .2, delay: animated ? 0 : .1 * index }} variants={animationVariants} style={{ maxWidth: '60px' }}>
                                <Grid container item justifyContent='center' alignItems='center' rowGap={1}>
                                    <Skill key={skill.name} skill={skill.name} icon={skill.icon} size='40px' />
                                </Grid>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid>
    )
}