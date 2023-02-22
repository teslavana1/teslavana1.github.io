import { Grid, Typography } from '@mui/material'
import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { grey } from 'material-ui-colors';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    backgroundImage: 'linear-gradient(90deg, yellow, red)',
    // backgroundImage: 'linear-gradient(90deg, red 10%, yellow 40%, yellow 60%, #1a90ff 90%)'
  },
}));

export default function Skill({skill, progress, index}) {
    return(
        <Grid container item direction='row' mb={(index !== 8) && 2} justifyContent={{xs: 'start', sm: 'center', md: 'space-between'}}>
            <Grid container item direction='column' xs={6}>
                <Typography variant='h7'>{skill}</Typography>
            </Grid>
            <Grid container item direction='column' xs={6} my='auto'>
                <BorderLinearProgress variant="determinate" value={progress} />
                {/* <Typography alignSelf='flex-end' variant='h7' color='rgba(0, 0, 0, .6)'>6 years</Typography> */}
            </Grid>
        </Grid>
    )
}