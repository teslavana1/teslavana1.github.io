import React, { useState } from 'react'
import PortfolioItem from './PortfolioItemMui'
import websites from './PortfolioSeeds'
import { v4 as uuid } from 'uuid'
import './Portfolio.css'
import { CircularProgress, Grid, Typography } from '@mui/material'
import Footer from './Footer'

export default function Portfolio() {
    const [loading, setLoading] = useState(false)

    console.log(loading)

    const main = websites.map(app => (
        <PortfolioItem key={uuid()} {...app} setLoading={setLoading} />
    ))

    return (
        <>
            <Grid container display={loading ? 'flex' : 'none'} className='overlay'>
                <Grid container item direction='row' xs={8} sm='auto' bgcolor='white' borderRadius={2} p={3} textAlign='center' columnGap={2} rowGap={2} justifyContent='center' alignItems='center'>
                    <CircularProgress />

                    <Typography color='primary'>Sorry, this web app needs a second to wake up!</Typography>
                </Grid>
            </Grid>
            <Grid container p={2} width='100vw'>
                <Grid container item direction='row' justifyContent='center' py={2} px={{ xs: 1, md: 4, xl: 5 }}>
                    <Grid container item xs={12}>
                        {main}
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}