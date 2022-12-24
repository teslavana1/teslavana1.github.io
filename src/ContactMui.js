import { LinkedIn, MailTwoTone, PhoneTwoTone, WebTwoTone } from '@mui/icons-material'
import { Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'

export default function Contact() {
    return (
        <>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: '600' }} color={blue[600]}>Contact</Typography>
            <Divider sx={{ mt: 1, mb: 2, color:'white' }} />
            <Grid container item direction='column' alignItems='flex-start' rowGap={2}>
                <List sx={{ height: '100%', width: '100%' }}>
                    <ListItemButton href='mailto: andrwmg@gmail.com' sx={{ height: '100%', width: '100%', color: blue[600], px: 0 }}>
                        <ListItemIcon>
                            <MailTwoTone sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            andrwmg@gmail.com
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='tel:6108884468' sx={{ height: '100%', width: '100%', color: blue[600], px: 0 }}>
                        <ListItemIcon>
                            <PhoneTwoTone sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            610-888-4468
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='https://www.andrewmichaelgay.com' sx={{ height: '100%', width: '100%', color: blue[600], px: 0 }}>
                        <ListItemIcon>
                            <WebTwoTone sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            andrewmichaelgay.com
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton href='https://www.linkedin.com/in/andrwmg' sx={{ height: '100%', width: '100%', color: blue[600], px: 0 }}>
                        <ListItemIcon>
                            <LinkedIn sx={{ color: blue[600] }} />
                        </ListItemIcon>
                        <ListItemText>
                            linkedin.com/in/andrwmg
                        </ListItemText>
                    </ListItemButton>
                </List>
                {/* <Button href="mailto: andrwmg@gmail.com" sx={{ color: blue[500] }} startIcon={<MailTwoTone />}>
                    andrwmg@gmail.com
                </Button>
                <Button href="tel:6108884468" sx={{ color: blue[500] }} startIcon={<LocalPhoneTwoTone />}>
                    610-888-4468
                </Button>
                <Button href="https://www.andrewmichaelgay.com" sx={{ color: blue[500] }} startIcon={<WebTwoTone />}>
                    andrewmichaelgay.com
                </Button>
                <Button href="http://www.linkedin.com/in/andrwmg" sx={{ color: blue[500] }} startIcon={<LinkedIn />}>
                    linkedin.com/in/andrwmg
                </Button>
                {/* <a href="mailto: andrwmg@gmail.com">
                    <Grid container item xs={12} className="link" columnGap={5}>
                        <Mail style={{ color: blue[500] }} />
                        <i style={{color: blue[500]}} className="bi bi-envelope me-1"></i>
                        <Typography component='span'>
                            andrwmg@gmail.com
                        </Typography>
                    </Grid>
                </a>
                <Grid container item xs={12} className="link">
                    <h4><a href="tel:6108884468">
                        <Phone className='text-primary me-1' />
                        610-888-4468</a></h4>
                </Grid>
                <Grid container item xs={12} className="link">
                    <h4>
                        <a href="https://www.andrewmichaelgay.com">
                            <Laptop className='text-primary me-1' />
                            andrewmichaelgay.com
                        </a>
                    </h4>
                </Grid>
                <Grid container item xs={12} className="link">
                    <h4>
                        <a href="http://www.linkedin.com/in/andrwmg">
                            <LinkedIn style={{ color: blue[500] }} />
                            linkedin.com/in/andrwmg</a>
                    </h4>
                </Grid> */}
            </Grid>
        </>
    )
}