import { useGetFilmsQuery } from "../../store/api";
import { Typography } from "@mui/material";
import Card from "../../components/Card/Card";
import { Film } from "../../types/types";
import style from "./styles.module.css";
import { ArrowIconRight } from "../../components/icons";

export function MainPage() {
  const { data } = useGetFilmsQuery();

  return (
    <>
      <Typography variant="h1" component="h1" sx={{ marginBottom: "2rem" }}>
        Популярные фильмы <ArrowIconRight />
      </Typography>
      <div className={style.row}>
        {data?.results.slice(0, 7).map((film: Film) => (
          <Card data={film} key={film.id} />
        ))}
      </div>
    </>
  );
}
