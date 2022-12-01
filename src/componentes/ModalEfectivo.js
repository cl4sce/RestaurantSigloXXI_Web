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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { pagoTotal } from '../api/ActualizarPagoTotal';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ModalEfectivo(topag) {
  const [abrir, setAbrir] = React.useState(false);

  const handleClickOpen = () => {
    setAbrir(true);
  };
//--------------------CAMBIAR ID DETALLE -------------//
  let id_pedi = 27;
  let totaPed = topag['topag']['total'];

  //console.log(totaPed);
  const handleAactu = async (e) =>{
    setOpen(true);
    const response = await pagoTotal(id_pedi, 1,totaPed);
    setAbrir(false);
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
      <Button size="small" onClick={handleClickOpen} >Pagar</Button>
      <Dialog open={abrir} onClose={handleClose}>
        <DialogTitle>Pago con efectivo</DialogTitle>
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
          <Button onClick={handleAactu}>Aceptar</Button>
        </DialogActions>
      </Dialog>
      </List>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se ha notificado al garzón 
        </Alert>
      </Snackbar>
    </Box>
  );
}
