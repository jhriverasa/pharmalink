import "tailwindcss/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";
import { dataUser } from "./api/dataUser";
import { users } from "./index";
import { DataGrid } from '@material-ui/data-grid';
import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Sin Cambios', 'Acetaminofén 500 mg', 3, 3, '500 mg'),
  createData('Continuar', 'Dolex x 500 mg', 3, 'Sin concentración', '500 mg'),
  createData('Sin Cambios', 'Silla de ruedas', 1, 1, 'Unidad'),
  createData('Continuar', 'Aminoácidos', 30, 15, '30 g'),
  createData('Continuar', 'Oxígeno', 1, 0, '99% Oxígeno'),
];

const numbers = [1, 2, 3, 4, 5];
const Main = () => {
  const classes = useStyles();
  return (
    <div className="flex bg-cover h-screen bg-center bg-no-repeat font-Rosario" style={{ backgroundImage: 'url(/background1.png)' }}>
      <div className="flex-1 rounded-l-lg border border-green-300 bg-white py-14 px-28 my-20 ml-60">
        <div className="text-gray-800 text-xl border-black">
          <table className="table-auto w-80 mb-12">
            <tbody>
              <tr className="border-b-2 border-black">
                <td>A</td>
              </tr>
              <tr className="border-b-2 border-gray-400">
                <td>Administración de cuentas</td>
              </tr>
              <tr className="border-b-2 border-gray-400">
                <td>Admisiones</td>
              </tr>
              <tr className="border-b-2 border-gray-400">
                <td>Apoyo terapéutico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Acción</TableCell>
                <TableCell>Amb?</TableCell>
                <TableCell align="right">Medicamento</TableCell>
                <TableCell align="right">Días&nbsp;Trata</TableCell>
                <TableCell align="right">Días&nbsp;Acum</TableCell>
                <TableCell align="right">Concen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row"> {row.name}</TableCell>
                  <TableCell padding="checkbox">
                    <Checkbox
                      inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    />
                  </TableCell>                  
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
      <div className="flex-1 border border-transparent rounded-r-lg text-center py-12 px-24 bg-gradient-to-b from-blue to-green my-20 mr-60">
        {
          dataUser.map((data) => {
            if (data.estado == 1) {
              return (
                <div className="text-white text-4xl pt-12">
                  {"Bienvenid@ " + data.name}
                </div>
              );
            }
          })
        }
      </div>
    </div>
  );
};

export default Main;
