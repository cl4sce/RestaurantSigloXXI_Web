import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import ControlPoint from '@mui/icons-material/ControlPoint';
import DoDisturbOn from '@mui/icons-material/DoDisturbOn';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { pedido } from '../api/PedidoApi';

export default function ModalMenu(id_modal) {
  console.log("id_modal "+id_modal);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    
  };

  const [contador , setContador] = useState(0)

  function handleIncrement(){
    setContador(contador + 1);
  }

  function handleDecrement(){
    setContador(contador - 1);
  }

  return (
    <div key={id_modal}>
        <IconButton aria-label="share" variant="outlined" onClick={handleClickOpen}>
            <ControlPoint />
        </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"¿Estas seguro de agregar este Menú?"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
             Cantidad: 
             <IconButton aria-label="share"  onClick={handleDecrement}>
                <DoDisturbOn />
            </IconButton>
             {contador}  
             <IconButton aria-label="share"  onClick={handleIncrement}>
                <ControlPoint />
            </IconButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Agregar
          </Button>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
