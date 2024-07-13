  import * as React from "react";
  import Paper from "@mui/material/Paper";

  import SearchIcon from "@mui/icons-material/Search";
  import CloseIcon from "@mui/icons-material/Close";
  import InputAdornment from "@mui/material/InputAdornment";
  import { toast } from "react-toastify";
  import TextField from "@mui/material/TextField";
  import Box from "@mui/material/Box";
  import { Button, Typography } from "@mui/material";
  import BodyListOfPost from '~/components/Seller/BodyListOfPost';
  import AddIngredientModal from "./AddIngredientModal";

  const columns = [
    { id: "id", label: "ID", minWidth: 50, align: "center" },
    { id: "title", label: "Title", minWidth: 100 },
    {
      id: "description",
      label: "Description",
      minWidth: 300,
      align: "left",
    },
    {
      id: "likes",
      label: "Likes",
      minWidth: 50,
      align: "center",
    },
    {
      id: "comments",
      label: "Comments",
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
  ];

  function createData(id, title, description, likes, comments, date, ) {
    return { id, title, description, likes, comments, date,  };
  }


  const initialRows = [
    createData(
      "1",
      "Kietnehihi",
      "Lorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplyLorem Ipsum is simplymplyLorem Ipsum is simplymplyLorem Ipsum is simplymplyLorem Ipsum is simply",
      99,
      10,
      "25-12-2024"
    ),
    createData("2", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("3", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("4", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("5", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("6", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("7", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("8", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("9", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
    createData("10", "Kietnehihi", "Lorem Ipsum is simply ", 99, 10, "25-12-2024"),
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
      row.title.toLowerCase().includes(searchValue.toLowerCase())
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
          <BodyListOfPost
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