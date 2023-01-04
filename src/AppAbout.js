import { Grid } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import AppAboutImage from './AppAboutImage'
import AppAboutText from './AppAboutText'
import createScrollSnap from 'scroll-snap'
import seeds from './AboutTeslaMartV2Seeds'

export default function AppAbout() {
    const container = useRef(null);

    const bindScrollSnap = () => {
        const element = container.current
        createScrollSnap(element, {
            snapDestinationY: '100%',
        }, () => console.log('snapped'))
    }

    useEffect(() => {
        bindScrollSnap()
    }, [])

    return (
        <Grid container maxHeight={{ lg: 'calc(100vh - 56px)' }} overflow='scroll'
         ref={container}
         >
            {seeds.map((seed, index) => {
                return (
                    (index % 2 === 0) ?

                        <Grid key={seed.heading} display={index === 0 && 'none'} container item direction='row' height={{xs: 'auto', md: '100%' }} position='relative' justifyContent='flex-start' bgcolor={seed.background} width='100vw'>
                            <AppAboutImage imageUrl={seed.imageUrl} side='25%' />
                            <AppAboutText heading={seed.heading} text={seed.text} color={seed.color} />
                        </Grid>
                        :
                        <Grid key={seed.heading} container item direction='row' flexWrap='wrap-reverse' height={{xs: 'auto', md: '100%' }} position='relative' justifyContent='flex-end' alignItems='center' bgcolor={seed.background} width='100vw'>
                            <AppAboutText heading={seed.heading} text={seed.text} color={seed.color}  />
                            <AppAboutImage imageUrl={seed.imageUrl} side='-25%' />
                        </Grid>
                )
            })}
        </Grid>
    )
}