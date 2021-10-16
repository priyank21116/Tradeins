import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Finallist from '../components/Finallist'
import { withStyles, makeStyles } from '@material-ui/core/styles';


const StyledTableCell = withStyles((theme) => ({
      head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
      },
      body: {
            fontSize: 14,
      },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
      root: {
            '&:nth-of-type(odd)': {
                  backgroundColor: theme.palette.action.hover,
            },
      },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
}

const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TAX_RATE = 0.07;






const useStyles = makeStyles({
      table: {
            minWidth: 700,
      },
});

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

const rowss = [
      createRow('Paperclips (Box)', 100, 1.15),
      createRow('Paper (Case)', 10, 45.99),
      createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Carttable() {
      const classes = useStyles();

      return (
            <Container maxWidth="lg">
                  <Grid container spacing={3} item >
                        <Grid item xs={9} >
                              <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                          <TableHead>
                                                <TableRow>
                                                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                                      <StyledTableCell align="right">Calories</StyledTableCell>
                                                      <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                                      <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                                      <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                                                </TableRow>
                                          </TableHead>
                                          <TableBody>
                                                {rows.map((row) => (
                                                      <StyledTableRow key={row.name}>
                                                            <StyledTableCell component="th" scope="row">
                                                                  {row.name}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                                      </StyledTableRow>
                                                ))}
                                          </TableBody>
                                    </Table>
                              </TableContainer>

                        </Grid>

                        <Grid item xs={3}>

                              <Finallist />
                        </Grid>
                  </Grid>





            </Container>






      );
}