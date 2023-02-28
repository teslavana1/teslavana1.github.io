import { Grid, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'
import Skill from './SkillMui'

const skills = [
    { name: 'Inventor', progress: 90, years: '6.5 years' },
    { name: 'CREO/ProE', progress: 90, years: '6.5 years' },
    { name: 'Solidworks', progress: 90, years: '6.5 years' },
    { name: 'Illustrator', progress: 80, years: '12 years' },
    { name: 'AutoCAD', progress: 80, years: ' years' },
    { name: 'Photoshop', progress: 60, years: '6.5 years' },
    { name: 'Windchill', progress: 60, years: '6.5 years' },
    { name: 'Agile', progress: 60, years: '6.5 years' },
]

export default function Skills() {
    return (
        <>
            <Typography fontSize='1.75rem' fontWeight={600} color={blue[600]}>Skills</Typography>
            <Grid container item gap={2}>
                {skills.map((skill, index) => (
                    <Skill key={skill.name} index={index} skill={skill.name} progress={skill.progress} />
                ))}
            </Grid>
        </>
    )
}