import { Box, Input, debounce } from "@mui/material";

import { useCallback, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const debouncedNavigate = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm.trim()) {
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      }
    }, 1000),
    [navigate]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedNavigate(value);
  };

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
      <Input
        placeholder="Search IMDb"
        className={styles.input}
        value={search}
        onChange={handleSearch}
      />
    </Box>
  );
}
