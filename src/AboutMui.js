import { Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'

export default function About() {
    return (
        <>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: '600', mb:3 }} color={blue[600]}>About</Typography>
            <Typography variant='body1' marginBottom='1rem'>I’m a Software Engineer shifting over from 8+ years of Mechanical Engineering experience. I've completed a 65+ hour web development bootcamp, where I learned HTML5, CSS, JavaScript, Bootstrap, NodeJS, MongoDB, and Express. I have also completed a 45+ hour ReactJS bootcamp that included ReactJS, MUI, NextJS, and Express.
            </Typography>
            <Typography variant='body1' marginBottom={0}>I enjoy learning new skills and honing them through real-world applications. I’m excited to apply my mechanical engineering and product development experience to my career as a Software Engineer.
            </Typography>
        </>
    )
}