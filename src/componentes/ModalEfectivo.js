import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
      <Button size="small" onClick={handleClickOpen} >Pagar</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Pago Con efectivo</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Un garzon se acercara a retirar su dinero.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Escribanos un comentario"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
      </List>
    </Box>
  );
}
