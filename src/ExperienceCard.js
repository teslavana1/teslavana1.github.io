import { Grid, Typography } from "@mui/material";
import React from "react";
import './PortfolioCard.css'

export default function ExperienceCard({  wide, company, title, info, details }) {
    

    // const [hover, setHover] = useState(true)

    // const handleEnter = () => {
    //     setHover(true)
    // }

    // const handleLeave = () => {
    //     setHover(false)
    // }

    // const handleClick = () => {
    //     setHover(!hover)
    // }

    // const handleProductClick = (evt) => {
    //     evt.stopPropagation()
    //     evt.preventDefault()

    // }

    return (
        <Grid container height='400px' minWidth={{ xs: '85%', sm: '56%', md: wide ? '70%' : '35%', lg: wide ? '44%' : '22%' }} borderRadius={2} position='relative' overflow='hidden' bgcolor='white'>
            <Grid item position='absolute' top={0} bottom={0} left={0} right={0} sx={{
                backgroundImage:
                    'linear-gradient(0deg, rgba(30, 136, 229,.75), rgba(30, 136, 229,.45))'
            }} />
            <Grid container item width='100%' px={3} direction='column' position='absolute' color='white' zIndex={2}>
                <Typography fontSize='24px'>
                    {company}
                </Typography>
                <Typography fontSize='16px'>
                    {title}
                </Typography>
                <Typography fontSize='16px' color='rgba(255, 255, 255, .9)'>
                    {info}
                </Typography>
                    <ul style={{ maxHeight: '300px', opacity: 1, transition: 'all .3s ease-in-out', margin: 0, marginBottom: '10px', paddingInlineStart: '15px' }}>
                        {details.map(d => (
                            <li key={d}>
                                <Typography fontSize='14px'>
                                    {d}
                                </Typography>
                            </li>
                        ))}
                    </ul>
            </Grid>
        </Grid>
    )
}

// const Card = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     boxSizing: 'content-box',
//     position: 'relative',
//     color: 'white',
//     minHeight: '400px',
//     width: '300px',
//     minWidth: '300px',
//     alignItems: 'center',
//     border: 'none',
//     borderRadius: '12px',
//     textAlign: 'left',
//     backgroundImage: 'linear-gradient(0deg, rgba(100,100,255,.6), rgba(100,100,255,.2))',
// })

// const Overlay = styled('div')({
//     boxSizing: 'border-box',
//     position: 'absolute',
//     borderRadius: '12px',
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: 'rgba(0,0,0,.8)',
//     opacity: 0,
//     transition: 'all .2s ease-in-out',
//     zIndex: 1,
// })