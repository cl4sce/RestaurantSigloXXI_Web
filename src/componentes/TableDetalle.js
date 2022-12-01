import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { obtenerDetalle } from "../api/VerDetalle";
import { observer } from "mobx-react-lite";

const TAX_RATE = 0.1;

function ccyFormat(num) {
  //return `${num.toFixed(0)}`;
  return `${new Intl.NumberFormat("de-DE").format(num)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(sub) {
  return sub.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

/* Componente TablaDetalle */
const TablaDetalle = observer(({ store }) => {
  const [detalle, setDetalle] = useState([]);

  const getDetallePedido = async () => {
    const result = await obtenerDetalle(5);

    if (result.status === 200) {
      //Setear valor de data en variable
      setDetalle(result.data.v_pedidos);
    } else {
      //Error de servicio
    }
  };

  const rows = detalle.map((det) =>
    createRow(det.nombre_plato, det.cantidad, det.precio)
  );

  const [invoiceSubtotal, setInvoiceSubtotal] = useState(subtotal(rows));

  const [invoiceTaxes, setInvoiceTaxes] = useState(TAX_RATE * invoiceSubtotal);

  const [invoiceTotal, setInvoiceTotal] = useState(
    invoiceTaxes + invoiceSubtotal
  );

  //const invoiceSubtotal = subtotal(rows);
  //const invoiceTaxes = TAX_RATE * invoiceSubtotal;

  useEffect(() => {
    getDetallePedido();
  }, []);

  useEffect(() => {
    setInvoiceSubtotal(subtotal(rows));
    setInvoiceTaxes(TAX_RATE * invoiceSubtotal);
    setInvoiceTotal(invoiceTaxes + invoiceSubtotal);
    store.setTotalInvoice(invoiceTotal);
  }, [detalle, invoiceSubtotal, invoiceTaxes, invoiceTotal]);

  //createRow('Palitos de ajo', 1, 3000),
  //createRow('Bebida', 2, 2000),

  /*function obtenerTotales(invoiceTotal, invoiceSubtotal){
    return {invoiceTotal , invoiceSubtotal};
  }*/

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
            <TableCell>Descripción</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio Uni.</TableCell>
            <TableCell align="right">Suma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row, id) => (
              <TableRow key={id}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">${ccyFormat(row.unit)}</TableCell>
                <TableCell align="right">${ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">${ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Propina sugerida</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">${ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">${ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default TablaDetalle;
