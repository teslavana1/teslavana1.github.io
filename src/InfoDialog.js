import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { Grid, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import InfoDialogCard from './InfoDialogCard';
import teslaMartV2 from './AboutTeslaMartV2Seeds';

function SimpleDialog({open, handleClose}) {

  return (
    <Dialog open={open} onClose={handleClose} sx={{bgcolor: 'transparent'}}>
      <Grid container item direction='row' overflow='scroll' wrap='nowrap' height='80vh' position='relative' p={1} columnGap={1}>
      {teslaMartV2.map((t, index) => (
          index > 0 && <InfoDialogCard key={t.heading} heading={t.heading} image={t.imageUrl} body={t.text} background={t.background} color={t.color} />
      ))}
      </Grid>
      <IconButton onClick={handleClose} sx={{position: 'fixed', right: '12%', zIndex: 10}}>
           <CloseOutlined fontSize='large' />
           </IconButton> 
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function InfoDialog({open, handleClose}) {

  return (
      <SimpleDialog
        open={open}
        handleClose={handleClose}
      />
  );
}