import * as React from "react";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import SellerMenuTable from "./SellerMenuTable/SellerMenuTable";

import { fetchAllRecipes } from "~/api/recipeAPI";

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  {
    id: "dish_name",
    label: "Dish Name",
    align: "center",
    minWidth: 100,
  },
  {
    id: "description",
    label: "Description",
    minWidth: 100,
    align: "center",
  },
  {
    id: "category",
    label: "Category",
    minWidth: 100,
    align: "center",
  },
  {
    id: "servings",
    label: "Servings",
    align: "center",
    minWidth: 50,
  },
  {
    id: "tags",
    label: "Tags",
    minWidth: 50,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
];

function createData(id, dish_name, description, category, servings, tags) {
  return { id, dish_name, description, category, servings, tags };
}

const initialRows = [
  createData(1, "Cat Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(2, "Dog Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(3, "Mouse Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(4, "Lion Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(5, "Fog Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(6, "Vegetable", "Taste", "Dessert", "2", "Breakfast"),
  createData(7, "Waifu", "Taste", "Dessert", "2", "Breakfast"),
  createData(8, "Dog Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(9, "Dog Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(10, "Dog Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(11, "Dog Meat", "Taste", "Dessert", "2", "Breakfast"),
  createData(12, "Dog Meat", "Taste", "Dessert", "2", "Breakfast"),
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
    row.dish_name.toLowerCase().includes(searchValue.toLowerCase())
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

  React.useEffect(() => {
    // Call API
    fetchAllRecipes()
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <Paper
        className="SellerMenuContent"
        sx={{ width: "90%", overflow: "hidden", boxShadow: 3 }}
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
            >
              <Typography variant="h7" sx={{ fontWeight: "bolder" }}>
                Create New
              </Typography>
            </Button>
          </Box>
        </Box>

        {/* Table */}
        <SellerMenuTable
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




