import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function AddTheImage() {
    const nav=useNavigate()
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
nav('/fileUpload')
  };

  const handleClose = () => {
    setOpen(false);
    nav('/posts')
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add an image
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
       <DialogActions>
          <Button autoFocus onClick={handleClose}>
            close
          </Button>
          <Button onClick={handleClose} autoFocus>
          send
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}