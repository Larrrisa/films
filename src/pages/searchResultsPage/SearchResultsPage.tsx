import { useLocation } from "react-router-dom";
import { useGetByKeywordQuery } from "../../store/api";
import Card from "../../components/сard/Card";
import style from "./styles.module.css";
import { Typography } from "@mui/material";

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
