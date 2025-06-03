import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import Card from "../../components/сard/Card";
import { useGetByKeywordQuery } from "../../store/api";

import style from "./styles.module.css";

export const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const { data } = useGetByKeywordQuery(`${query}`);

  return (
    <div>
      <Typography variant="h1">Search results</Typography>
      <div className={style.cards}>
        {data?.results.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
