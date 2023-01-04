import React, { useState } from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'

export default function PortfolioItem({ name, url, detailsUrl, github, image, description, setLoading }) {

    const [hover, setHover] = useState(false)

    return (
        <Card elevation={3} sx={{ marginBottom: 5}}>
            <Grid container direction='row' maxHeight={{ md: '450px' }}>
                <Grid container item xs={12} md={6} height='100%' zIndex={1}>
                    <Button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} sx={{ display: 'flex', justifyContent: 'flex-start', height: '100%', width: '100%', p: 0, borderRadius: 0, opacity: hover ? .9 : 1.0, transition: '.3s ease-in-out' }} href={url} onClick={() => setLoading(true)}>
                        <Grid container item direction='column' height='100%' width='100%' justifyContent='flex-start'>
                        <img style={{ objectFit: 'cover', height: '100%', maxWidth: '100%', scale: hover ? '1.1' : '1.0', transition: '.3s ease-in-out' }} alt='' src={image && image} />
                        </Grid>
                    </Button>
                </Grid>
                <Grid container item direction='column' xs={12} md={6} p={{ xs: 2, md: 3 }} zIndex={10} bgcolor='white'>
                    <Typography variant='h5' width='100%' color='primary'>{name}</Typography>
                    <Grid container item direction='column' wrap={{ xs: 'wrap-reverse', xl: 'wrap' }}>
                        <Grid container item direction='row' xs={12} my={{ xs: 0, md: 2 }} order={{ xs: 3, md: 2 }}>
                            <Typography whiteSpace='break-spaces' variant={{ xs: 'body1', md: 'h6' }}>{description}</Typography>
                        </Grid>

                        <Grid container item direction='row' xs={12} columnGap={1} my={{ xs: 2, md: 0 }} mt={{ xs: 2, md: 'auto' }} order={{ xs: 2, md: 3 }}>
                            <Grid container item direction='column' xs='auto' paddingLeft={0}>
                                <Button href={url} variant='outlined' onClick={() => setLoading(true)}>Visit</Button>
                            </Grid>
                            {detailsUrl ?
                                <Grid container item direction='column' xs='auto'>
                                    <Button href={detailsUrl} variant='outlined'>Details</Button>
                                </Grid>
                                :
                                null
                            }
                            {github ?
                                <Grid container item direction='column' xs='auto'>
                                    <Button href={github} variant='outlined'>Github</Button>
                                </Grid>
                                :
                                null
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>

    )
}