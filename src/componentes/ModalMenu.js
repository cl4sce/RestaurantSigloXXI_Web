import React from "react";
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
import { useState } from "react";
import axios from "axios";
import { newPedido } from '../api/InsertarDetalle.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ModalMenu({id_mod, tit, prec, desc}) {

  const [abrir, setAbrir] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickAbrir = () => {
    setAbrir(true);
  };

  const handleCerrar = () => {
    setAbrir(false);
  };

  const [contador , setContador] = useState(1)

  function handleIncrement(){
    setContador(contador + 1);
  }

  function handleDecrement(){
    setContador(contador - 1);
  }

  let id_det = 5;
  let preci = prec;
  let cant = contador;
  let esta_plat = 1;
  
  //console.log("fecha "+ contador);
  const handleAgregar = async (e) => {
    setOpen(true);
    const response = await newPedido(id_det,id_mod,cant,preci,tit,esta_plat);
    setAbrir(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="share" variant="outlined" onClick={handleClickAbrir}>
          <ControlPoint />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={abrir}
        onClose={handleCerrar}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"¿Estas seguro de agregar este Menú?"}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Plato: {tit}</DialogContentText>
          <DialogContentText>Detalle: {desc}</DialogContentText>
          <DialogContentText>Precio: ${prec}</DialogContentText>
          <DialogContentText>
             Cantidad: 
             <IconButton aria-label="share" onClick={handleDecrement}>
                <DoDisturbOn />
            </IconButton>
             {contador}  
             <IconButton aria-label="share"  onClick={handleIncrement}>
                <ControlPoint />
            </IconButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAgregar}>
            Agregar
          </Button>
          <Button onClick={handleCerrar} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Se a agregado el menú: {tit}
          </Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
}
