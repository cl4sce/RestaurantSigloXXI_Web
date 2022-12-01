import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import { insPedido } from '../api/InsertarPedido.js';

export default function ModalPedido() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let emple = 1;
  let mesaas = 4;
  let pag = 0;
  let tot = 0;
  let est_ped = 1;

  const handleInsertar = async (e) => {
      const response = await insPedido(mesaas,emple,pag,tot,est_ped);
      setOpen(false);
  };

  return (
      <List component="div" role="group">
      <Button size="small" onClick={handleClickOpen} >Nuevo Pedido</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo Pedido</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Ingrese codigo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleInsertar}>Aceptar</Button>
        </DialogActions>
      </Dialog>
      </List>
  );
}
