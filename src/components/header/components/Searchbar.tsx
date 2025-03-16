import { TextField, MenuItem, Select, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styles from "./styles.module.css";

export default function SearchBar() {
  const [category, setCategory] = useState("all");

  return (
    <Box className={styles.searchContainer}>
      {/* <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.select}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="movies">Movies</MenuItem>
        <MenuItem value="tv">TV Shows</MenuItem>
      </Select> */}
      <TextField
        variant="outlined"
        placeholder="Search IMDb"
        className={styles.input}
      />
      <SearchIcon className={styles.icon} />
    </Box>
  );
}
