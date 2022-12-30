import { Grid, Typography } from '@mui/material'
import { blue, grey } from 'material-ui-colors'
import React from 'react'

export default function Education() {
    const education = [
        {title: 'Udemy', 
    details: 'The Modern React Bootcamp',
    dates: 'Sep 2022 - Nov 2022'
    },
    {title: 'Udemy', 
    details: 'The Web Developer Bootcamp 2022',
    dates: 'Jun 2022 - Aug 2022'
    },
    {title: 'UC San Diego', 
    details: 'Adobe Illustrator',
    dates: 'Oct 2016 - Dec 2016'
    },
    {title: 'University of Delaware', 
    details: 'B.S. Mechanical Engineering',
    dates: 'Aug 2008 - Dec 2012'
    }
]
    return (
        <>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: '600', mb:3 }} color={blue[600]}>Education</Typography>
            {education.map(item => (
            <Grid container item direction='column' mb='1.5rem'>
                <Typography sx={{ fontSize: '1.4rem', fontWeight: '600' }}>{item.title}</Typography>
                <Typography variant='subtitle1' sx={{ fontSize: '1rem', fontWeight: '400' }}>{item.details}</Typography>
                <Typography color={grey[900]} sx={{ fontSize: '1rem', fontWeight: '200' }}>{item.dates}</Typography>
            </Grid>
            ))}
        </>
    )
}