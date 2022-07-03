import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { TiTick,TiTimes,TiWarning } from "react-icons/ti";

const columns = [
  { id: "CustomerId", label: "Customer Id", minWidth: 100, align: "center" },
  {
    id: "CustomerName",
    label: "Customer Name",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Address",
    label: "Address",
    minWidth: 170,
    align: "center",
  },
  {
    id: "EmailId",
    label: "Email Id",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Phone",
    label: "Phone",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
  {
    id: "LoyalityCustomer",
    label: "Loyality Customer",
    minWidth: 170,
    align: "center",
  },
];

function createData(
  CustomerId,
  CustomerName,
  Address,
  EmailId,
  Phone,
  LoyalityCustomer,
  Status
) {
  return {
    CustomerId,
    CustomerName,
    Address,
    EmailId,
    Phone,
    LoyalityCustomer,
    Status,
  };
}

const rows = [
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "inactive"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "expired"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
  createData(1, "Axil", "aa", "abu@gami.com", "23423423", "yess", "active"),
];

const PaginationTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="mt-4" sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <p className="text-primary m-1">
                    <strong>{column.label}</strong>
                  </p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value === "active" ? (
                            <TiTick className="text-success" size={18} />
                          ) : value === "inactive" ? (
                            <TiWarning className="text-warning" size={18} />
                          ) : value==="expired"? (
                            <TiTimes className="text-danger" size={18} />
                          ):value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PaginationTable;