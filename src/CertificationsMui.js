import { Grid, Link, Typography } from '@mui/material'
import { blue, grey } from 'material-ui-colors'
import React from 'react'

const items = [
    {
        company: 'NCEES',
        title: 'Engineer In Training (EIT)',
        info: 'April 2013',
        details: 'Certification ID: 14-306-44'
    }
]

export default function Certifications() {

    return (
        <>
            <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}>Certifications</Typography>
            <Grid container item rowGap={2}>
                {items.map((item, index) => (
                <Grid key={item.company} container item direction='column'>
                    <Typography fontSize='1.4rem' fontWeight={600}>
                        {item.company}
                    </Typography>
                    <Typography variant='subtitle1' fontSize='1rem' fontWeight='400'>
                        {item.title}
                    </Typography>
                    <Typography variant='subtitle1' fontSize='1rem' fontWeight='400'>
                    <Link href='https://account.ncees.org/rn/1430644-616504-c2fd583' sx={{textDecoration: 'none', color: 'inherit'}}>
                        {item.details}
                        </Link>
                    </Typography>
                    <Typography color={grey[900]} fontSize='1rem' fontWeight='200'>
                        {item.info}
                    </Typography>
                </Grid>
            ))}
        </Grid>
            </>
            )
}