import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import axios from "axios";

const TAX_RATE = 0.19;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}


export default function DetallePedido() {

  const [ platos , setPlatos] = useState([]);

  useEffect(()=>{
      const obtenerPlato = async() =>{
          const API_PLATO_URL = "https://g96da999b89fb17-restaurantedb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/platos/2";
          const result = await axios.get(API_PLATO_URL);
          //console.log(result.data);
          setPlatos(result.data);
      } 
      obtenerPlato()

  },[]);

  const rows = [
    createRow(platos.nombre, 2, platos.precio_plato),
    
  ];
  
  //createRow('Palitos de ajo', 1, 3000),
  //createRow('Bebida', 2, 2000),

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Productos
            </TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
          <TableRow>
            <TableCell >Descripción</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio Uni.</TableCell>
            <TableCell align="right">Suma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IVA</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
