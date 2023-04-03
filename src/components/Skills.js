import { Grid, Typography } from '@mui/material'
import React from 'react'
import Skill from './Skill'
import inventor from '../images/inventor.png'
import creo from '../images/creo.png'
import solidworks from '../images/solidworks.png'
import illustrator from '../images/illustrator.png'
import autocad from '../images/autocad.png'
import photoshop from '../images/photoshop.png'
import windchill from '../images/windchill.png'


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
    return (
        <Grid
                container
                item
                direction="row"
                justifyContent={{
                    xs: "center"
                }}
                rowGap={4}
                bgcolor="white"
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
            <Grid container item columnGap={{ xs: 2, sm: 4 }} rowGap={4} direction='row' justifyContent='center'>
                {skills.map((skill, index) => (
                    <Skill key={skill.name} index={index} skill={skill.name} icon={skill.icon} size={{ xs: '40px', sm: '40px' }} />
                ))}
            </Grid>

                </Grid>
            </Grid>
    )
}