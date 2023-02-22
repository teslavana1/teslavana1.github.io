import { Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'

export default function About() {
    return (
        <>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: '600', mb: 3 }} color={blue[600]}>About</Typography>
            <Typography variant='body1' marginBottom='1rem'>
                I’m a Senior Mechanical Engineer with 8+ years of new product development and sustaining experience. Thoughout my career, I have designed 20+ products from concept to production and managed teams for several sustaining projects. These products included sheet metal and plastic injection molding design, PCA layout, and design verification testing.
            </Typography>
            <Typography variant='body1' marginBottom={0}>I enjoy learning new skills and honing them through real-world applications. I’m excited to apply my mechanical engineering and product development experience to the next phase of my career.
            </Typography>
        </>
    )
}