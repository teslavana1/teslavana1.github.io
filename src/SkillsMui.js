import { Grid, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'
import Skill from './SkillMui'

const skills = [
    {name: 'Inventor', progress: 90, years: '6.5 years' },
    {name: 'CREO/ProE', progress: 90, years: '6.5 years'},
    {name: 'Solidworks', progress: 90, years: '6.5 years'},
    {name: 'Illustrator', progress: 80, years: '12 years'},
    {name: 'AutoCAD', progress: 80, years: ' years'},
    {name: 'Photoshop', progress: 60, years: '6.5 years'},
    // {name: 'MongoDB', progress: 60},
    // {name: 'Illustrator', progress: 80},
    // {name: 'Photoshop', progress: 60}
]

export default function Skills () {
    return (
        <>
        <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}>Skills</Typography>
        <Grid container item direction='column' rowGap={1}>
        {skills.map((skill, index)=> (
            <Skill key={skill.name} index={index} skill={skill.name} progress={skill.progress} />
        ))}
        </Grid>
        {/* <Skill skill='HTML/CSS' progress='80' />
        <Skill skill='JavaScript' progress='60' />
        <Skill skill='React' progress='80' />
        <Skill skill='Bootstrap' progress='80' />
        <Skill skill='MUI' progress='80' />
        <Skill skill='Node' progress='60' />
        <Skill skill='MongoDB' progress='60' />
        <Skill skill='Illustrator' progress='80' />
        <Skill skill='Photoshop' progress='60' /> */}
        </>

    )
}