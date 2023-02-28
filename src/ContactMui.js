import {  LinkedIn, MailOutline, PhoneOutlined, WebOutlined } from '@mui/icons-material'
import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'

const items = [
    {text: 'andrwmg@gmail.com', icon: <MailOutline />, link: 'mailto: andrwmg@gmail.com'},
    {text: '610-888-4468', icon: <PhoneOutlined />, link: 'tel:6108884468'},
    {text: 'andrwmg.herokuapp.com', icon: <WebOutlined />, link: 'https://andrwmg.herokuapp.com'},
    {text: 'linkedin.com/in/andrwmg', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/andrwmg'}
]

export default function Contact() {
    return (
        <>
            <Typography fontSize='1.75rem' fontWeight={600} color={blue[600]}>Contact</Typography>
            <Grid container item direction='column' alignItems='flex-start' rowGap={2}>
                <List disablePadding sx={{ height: '100%', width: '100%' }}>
                    {items.map(i => (
                        <ListItemButton key={i.link} href={i.link} sx={{ width: '100%'  }}>
                        <ListItemIcon sx={{ color: blue[600] }}>
                            {i.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {i.text}
                        </ListItemText>
                    </ListItemButton>
                    ))}
                </List>
            </Grid>
        </>
    )
}