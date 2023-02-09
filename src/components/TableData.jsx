import * as React from "react";
import {
  Table,
  Switch,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// table categories
const createData = (
  priority,
  widget,
  title,
  template,
  product,
  visibility,
  pageStatus
) => {
  return { priority, widget, title, template, product, visibility, pageStatus };
};

// table data
const rows = [
  createData(1, "Best seller", "title", "Homepage", 6.0, "Everyone", 4.0),
  createData(2, "Recommendation Based on Browsing", "title", "Homepage", 9.0, "Everyone", 4.3),
  createData(3, "Your recent views", "title", "Homepage", 16.0, "Everyone", 6.0),
  createData(4, "similar products based on browsing", "title", "Homepage", 3.7, "Everyone", 4.3),
  createData(5, "New Arrivals", "title", "Homepage", 16.0, "Everyooe", 3.9),
];


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>
          <TableRow sx={{ backgroundColor: "#F3F5F8" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Priority</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Widget</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Template
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              #Product
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Visibility
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              ON/ OFF
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.priority}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.priority}</TableCell>
              <TableCell component="th" scope="row">
                {row.widget}
              </TableCell>
              <TableCell>{row.widget}</TableCell>
              <TableCell align="right">{row.template}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.visibility}</TableCell>
              <TableCell align="right"> <Switch defaultChecked /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
