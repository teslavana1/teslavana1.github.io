import { InfoOutlined } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './PortfolioCard.css'

export default function InfoDialogCard({ heading, image, body, background, color }) {

    const [flip, setFlip] = useState(true)

    const handleFlip = (evt) => {
        evt.preventDefault()
        setFlip(!flip)
    }

    useEffect(()=> {
        setFlip(false)
    }, [])

    return (
        <Grid container item direction='column' xs={10} height='100%' width='90vw' minWidth={{xs: '95%', sm: '95%'}} px={2} borderRadius={2} position='relative' overflow='hidden' bgcolor={background} 
        // onMouseEnter={handleEnter} onMouseLeave={handleLeave}
        >
            <IconButton onClick={handleFlip} sx={{ display: { md: 'none' }, zIndex: 10, position: 'absolute', bottom: 0, right: 0 }}>
                <InfoOutlined />
            </IconButton>
            <Grid container item direction='column' justifyContent='center' position='absolute' top={0} bottom={0} left={0} right={{xs: '100%', md: '50%'}} alignItems='center' height='100%' sx={{width: {xs: '100%', md: '55%'}}}>
                <img src={image} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </Grid>
            <Grid item container direction='column' justifyContent='flex-start' position={{xs: 'absolute'}} width={{xs: '100%', md: '50%'}} top={flip ? 0 : '91%'} bottom={0} left={{xs: 0, md: '50%'}} right={0} zIndex={1} py={2} pl={4} pr={{xs: 4, md: 1}} rowGap={2} color={color} overflow='scroll' wrap='nowrap' 
            bgcolor={{xs: background, md: 'transparent'}}
            sx={{ opacity: {xs: flip ? 1 : 1, md: 1}, transition: 'all .3s ease-in-out' }}
            >

                <Typography fontSize='24px' color={color}>
                    {heading}
                </Typography>
                {body.map(t => (
                    <Typography key={t} fontSize='16px'>
                        {t}
                    </Typography>
                ))}
            </Grid>
        </Grid>
    )
}