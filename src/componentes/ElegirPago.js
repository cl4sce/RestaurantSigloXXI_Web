import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CreditCard from '@mui/icons-material/CreditCard';
import AttachMoney from '@mui/icons-material/AttachMoney';
import ModalEfectivo from './ModalEfectivo';
import ModalTarjeta from './ModalTarjeta';
//import { obtenerTotales } from './TableDetalle'; 

//let total = obtenerTotales(invoiceTotal);
//console.log(total);



export default function ElegirPago(total) {
  console.log(total);

  const cardEfect = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Efectivo
        </Typography>
        <Typography variant="body2">
          <AttachMoney />
        </Typography>
        <Typography>
          <ModalEfectivo topag = {total} />
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
  const cardTrans = (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            Transbank
          </Typography>
          <Typography variant="body2">
            <CreditCard />
          </Typography>
          <Typography>
            <ModalTarjeta topag = {total}/>
          </Typography>
        </CardContent>
      </React.Fragment>
    );

  return (
    <div className="row">
        <div className="col-md-6">
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{cardEfect}</Card>
        </Box>
        </div>
        
        <div className="col-md-6">
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{cardTrans}</Card>
        </Box>
        </div>
    </div>
    
  );
}
