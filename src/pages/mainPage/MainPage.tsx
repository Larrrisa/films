import { useGetFilmsQuery } from "../../store/api";
import { Typography } from "@mui/material";
import Card from "../../components/Card/Card";
import { Film } from "../../types/types";

export function MainPage() {
  const { data } = useGetFilmsQuery();

  return (
    <>
      <Typography variant="h1" component="h1">
        {data?.results.map((film: Film) => (
          <Card data={film} />
        ))}
      </Typography>
    </>
  );
}
