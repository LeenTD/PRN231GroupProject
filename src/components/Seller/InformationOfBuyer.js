import * as React from "react";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import BodyListOfBuyer from '~/components/Seller/BodyListOfBuyer';

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "phoneNumber",
    label: "Phone number",
    minWidth: 100,
    align: "left",
  },
  {
    id: "details",
    label: "Details",
    minWidth: 300,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 50,
    align: "center",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 50,
    align: "center",
    format: (value) => new Date(value).toLocaleDateString("vi-VI"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },

];



function createData(id, name, phoneNumber, details, quantity, date, action) {
  return { id, name, phoneNumber, details, quantity, date, action };
}




const initialRows = [
  createData(
    "1", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "2", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "3", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "4", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "5", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "6", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "7", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "8", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "9", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "10", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
  createData(
    "11", "Kietnehihi", "0123456789", "Lorem Ipsum is simply ", 10, "25-12-2024"
  ),
];

export default function SellerMenuContent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState("");
  const [rows, setRows] = React.useState(initialRows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOnSubmit = () => {
    if (!searchValue) {
      toast.error("Please enter dish name to search!");
      return;
    }
  };

  const onDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    console.log(`Deleted row with id: ${id}`);
  }
  
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Paper
        className="SellerMenuContent"
        sx={{ width: "70vw", overflow: "hidden", boxShadow: 3 }}
      >
        {/* Search in table and create new  */}
        <Box
          sx={{
            width: "100%",
            padding: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "30%" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Search by dish name!"
              variant="outlined"
              size="small"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              sx={{
                "& label": { color: "#015E44" },
                "& input": { color: "#015E44" },
                "& label.Mui-focused": { color: "#015E44" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#015E44" },
                  "&:hover fieldset": { borderColor: "#015E44" },
                  "&.Mui-focused fieldset": { borderColor: "#015E44" },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon
                      fontSize="medium"
                      sx={{
                        color: searchValue ? "#015E44" : "transparent",
                        cursor: "pointer",
                        mr: "4px",
                      }}
                      onClick={() => setSearchValue("")}
                    />

                    <SearchIcon
                      fontSize="medium"
                      sx={{ color: "#015E44", cursor: "pointer" }}
                      onClick={handleOnSubmit}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Table */}
        <BodyListOfBuyer
          columns={columns}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          filteredRows={filteredRows}
          onDelete={onDelete}
        />
      </Paper>
    </div>
  );
}




