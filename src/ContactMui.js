import { GitHub, LinkedIn, MailOutline, PhoneOutlined, WebOutlined } from '@mui/icons-material'
import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'

export default function Contact() {
    return (
        <>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: '600', mb:3 }} color={blue[600]}>Contact</Typography>
            <Grid container item direction='column' alignItems='flex-start' rowGap={2}>
                <List disablePadding sx={{ height: '100%', width: '100%' }}>
                    <ListItemButton href='mailto: andrwmg@gmail.com' sx={{ width: '100%'  }}>
                        <ListItemIcon>
                            <MailOutline sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            andrwmg@gmail.com
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='tel:6108884468' sx={{ width: '100%' }}>
                        <ListItemIcon>
                            <PhoneOutlined sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            610-888-4468
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='https://www.andrewmichaelgay.com' sx={{ width: '100%' }}>
                        <ListItemIcon>
                            <WebOutlined sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            andrewmichaelgay.com
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='https://www.linkedin.com/in/andrwmg' sx={{ width: '100%' }}>
                        <ListItemIcon>
                            <LinkedIn sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            linkedin.com/in/andrwmg
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='https://github.com/andrwmg' sx={{ width: '100%' }}>
                        <ListItemIcon>
                            <GitHub sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            github.com/andrwmg
                        </ListItemText>
                    </ListItemButton>

                </List>
            </Grid>
        </>
    )
}