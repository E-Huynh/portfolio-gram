import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PhoneIcon from '@material-ui/icons/Phone';


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PhoneIcon onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Contact me"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Erik Huynh
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <a href="tel:801-699-3049">801-699-4039</a>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          <a href="mailto:Erik.W.Huynh@gmail.com">Erik.W.Huynh@Gmail.com</a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
