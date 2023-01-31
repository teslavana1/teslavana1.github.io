import React, { useState } from 'react'
import PortfolioItem from './PortfolioItemMui'
import websites from './PortfolioSeeds'
import { v4 as uuid } from 'uuid'
import { CircularProgress, Grid, Typography } from '@mui/material'
import Footer from './Footer'
import styled from '@emotion/styled'



export default function Portfolio() {

    const [loading, setLoading] = useState(false)

    const Overlay = styled(Grid)({
        display: loading ? 'flex' : 'none',
        position: 'fixed',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: '1000',
        opacity: '0.9',
        mt: '-24px',
        backgroundColor: 'black',
        filter: 'alpha(opacity=80)'
    })

    const main = websites.map(app => (
        <PortfolioItem key={uuid()} {...app} setLoading={setLoading} />
    ))

    return (
        <>
            <Overlay>
                <Grid container item direction='row' xs={8} sm='auto' bgcolor='white' borderRadius={2} p={3} textAlign='center' columnGap={2} rowGap={2} justifyContent='center' alignItems='center'>
                    <CircularProgress />
                    <Typography color='primary'>Sorry, this web app needs a second to wake up!</Typography>
                </Grid>
            </Overlay>
                <Grid container item direction='row' justifyContent='center' pt={4} pb={6} px={{ xs: 2, md: 4, xl: 5 }} width='100vw'>
                        {main}
                    </Grid>
            <Footer />
        </>
    )
}