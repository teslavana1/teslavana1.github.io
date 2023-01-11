import { Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'
import Skill from './SkillMui'

const skills = [
    {name: 'HTML/CSS', progress: '80' },
    {name: 'JavaScript', progress: '60'},
    {name: 'React', progress: '80'},
    {name: 'Bootstrap', progress: '80'},
    {name: 'MUI', progress: '80'},
    {name: 'Node', progress: '60'},
    {name: 'MongoDB', progress: '60'},
    {name: 'Illustrator', progress: '80'},
    {name: 'Photoshop', progress: '60'}
]

export default function Skills () {
    return (
        <>
        <Typography sx={{fontSize:'1.75rem', mb:3}} color={blue[600]}><b>Skills</b></Typography>
        {skills.map((skill, index)=> (
            <Skill index={index} skill={skill.name} progress={skill.progress} />
        ))}
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