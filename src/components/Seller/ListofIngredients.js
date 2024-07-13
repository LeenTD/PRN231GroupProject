import * as React from "react";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import BodyListOfIngredient from '~/components/Seller/BodyListOfIngredients';
import AddIngredientModal from "./AddIngredientModal";

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  {
    id: "ingedientName", 
    label: "Ingredient Name", 
    align: "center",
    minWidth: 100
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "center",
    valueFormatter: (params) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(params.value);
      }

  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "center",
    onClick : (value) => console.log(value.target.textContent)

  },
  {
    id: "importDate",
    label: "Import Date",
    align: "center",
    minWidth: 50,
    format: (value) => new Date(value).toLocaleDateString("vi-VI"),
  },
  {
    id: "expiredDate",
    label: "Expired Date",
    minWidth: 50,
    align: "center",
    format: (value) => new Date(value).toLocaleDateString("vi-VI"),
    onClick : (value) => console.log(value.target.textContent)

  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

function createData(id, ingedientName, price, quantity, importDate, expiredDate) {
  return { id, ingedientName, price, quantity, importDate, expiredDate };
}


const initialRows = [
  createData(1, "Golden carot", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(2, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(3, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(4, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(5, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(6, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(7, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(8, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(9, "Golden Apple", 99.99, 10, "25- 12-2023", "25-12-2024"),
  createData(10, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(11, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
  createData(12, "Golden Apple", 99.99, 10, "25-12-2023", "25-12-2024"),
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
    row.ingedientName.toLowerCase().includes(searchValue.toLowerCase())
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Box>
            <Button
              size="large"
              variant="outlined"
              sx={{
                color: "#015E44",
                borderColor: "#015E44",
                borderWidth: 1,
                "&:hover": {
                  borderColor: "#015E44",
                },
              }}
              onClick={handleOpen}
            >
              <Typography variant="h7" sx={{ fontWeight: "bolder" }}>
                Create New
              </Typography>
            </Button>
            <AddIngredientModal open={open} handleClose={handleClose}/>
          </Box>
        </Box>

        {/* Table */}
        <BodyListOfIngredient
          columns={columns}
          rows={rows}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          filteredRows={filteredRows}
          onDelete={onDelete}
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
      </Paper>
    </div>
  );
}




