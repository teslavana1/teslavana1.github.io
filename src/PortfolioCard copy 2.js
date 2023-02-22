import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import './PortfolioCard.css'

export default function PortfolioCard3({ src, company, title, body, view, details, github, handleClickOpen }) {

    const [hover, setHover] = useState(false)

    const handleEnter = () => {
        setHover(true)
    }

    const handleLeave = () => {
        setHover(false)
    }

    const handleClick = () => {
        setHover(!hover)
    }

    // const handleProductClick = (evt) => {
    //     evt.stopPropagation()
    //     evt.preventDefault()

    // }

    return (
        <Grid container item direction='column' xs={10} justifyContent='flex-end' height='100%' width='100%' minWidth={{xs: '84%', md: '45%'}} maxWidth='200px' borderRadius={2} position='relative' onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick} overflow='hidden'>
            <Grid item container position='absolute' top={hover ? 0 : '25%'} bottom={hover ? 0 : '25%'} right={0} left={0} zIndex={1} bgcolor='rgba(255, 255, 255, .95)' sx={{ opacity: hover ? 1 : 0, transition: 'all .3s ease-in-out' }} />
            <Grid item container direction='column' justifyContent='flex-end' height='100%' width='100%' zIndex={1} py={3} px={3} rowGap={2} color='black' sx={{ opacity: hover ? 1 : 0, transition: 'all .3s ease-in-out' }}>
                {company ?
                    <Typography fontSize='14px'>
                        {company}
                    </Typography>
                    : null
}
                    <Typography fontSize='24px' color='primary'>
                        {title}
                    </Typography>
                    {/* {bullets ?
                        <ul style={{ margin: 0, marginBottom: hover ? '10px' : 0 }}>
                            {bullets.map(b => (
                                <li key={b}>
                                    <Typography fontSize='14px'>
                                        {b}
                                    </Typography>
                                </li>
                            ))}
                        </ul> : */}
                        {body.map(b => (
                    <Typography key={b} fontSize='16px'>
                        {b}
                    </Typography>
                        ))}
                    {/* } */}
                <Grid container item direction='row' columnGap={1}>
                    {view ? <Button href={view} variant='outlined' disabled={!hover}>View</Button> : null}
                    {details ? <Button onClick={handleClickOpen} variant='outlined' disabled={!hover}>Info</Button> : null}
                    {github ? <Button href={github} variant='outlined' disabled={!hover}>Github</Button> : null}
                </Grid>
            </Grid>
            <Grid container item position='absolute' top={0} bottom={0} left={0} right={0} direction='column' justifyContent='center' alignItems='center' height='100%' width='100%' rowGap='40px'>
                {src.map(s => (
                    <img key={s} src={s} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                ))}
            </Grid>
        </Grid>
    )
}