import * as React from "react";
import Paper from "@mui/material/Paper";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import AdminListUsersTable from "./AdminListUsersTable/AdminListUsersTable";

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  {
    id: "username",
    label: "Username",
    align: "center",
    minWidth: 100,
  },
  {
    id: "fullname",
    label: "Fullname",
    minWidth: 100,
    align: "center",
  },
  {
    id: "phone_number",
    label: "Phone",
    minWidth: 100,
    align: "center",
  },
  {
    id: "dob",
    label: "Date of birth",
    minWidth: 50,
    align: "center",
  },
  {
    id: "user_role",
    label: "Role",
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

function createData(id, username, fullname, phone_number, dob, user_role) {
  return { id, username, fullname, phone_number, dob, user_role};
}

const initialRows = [
  createData(1, "weeeebou", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(2, "enime", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(3, "Mouse Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(4, "Lion Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(5, "Fog Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(6, "Vegetable", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(7, "Waifu", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(8, "Dog Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(9, "Dog Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(10, "Dog Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(11, "Dog Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
  createData(12, "Dog Meat", "Lê Hiếu", "0123459", "01/01/2001", "User"),
];

export default function AdminListUsersContent() {
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
    row.username.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleOnSubmit = () => {
    if (!searchValue) {
      toast.error("Please enter username to search!");
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
        className="AdminListUserContent"
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
              placeholder="Search by username!"
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
        <AdminListUsersTable
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




