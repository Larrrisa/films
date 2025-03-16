import {
  useGetFilmsQuery,
  useGetSeriesQuery,
  useGetTrendingFilmsQuery,
} from "../../store/api";
import { Typography } from "@mui/material";
import Card from "../../components/сard/Card";
import { Film, Series } from "../../types/types";
import style from "./styles.module.css";
import { ArrowIconRight } from "../../components/icons";

export function MainPage() {
  const { data: filmsData } = useGetFilmsQuery();
  const { data: seriesData } = useGetSeriesQuery();
  const { data: trendingFilmsData } = useGetTrendingFilmsQuery();

  console.log(trendingFilmsData);

  return (
    <>
      <Typography variant="h2" component="h2" sx={{ marginBottom: "2rem" }}>
        Популярные фильмы <ArrowIconRight />
      </Typography>
      <div className={style.row}>
        {filmsData?.results.slice(0, 6).map((film: Film) => (
          <Card data={{ ...film, type: "film" }} key={film.id} />
        ))}
      </div>
      <Typography variant="h2" component="h2" sx={{ margin: "2rem 0" }}>
        Популярные сериалы <ArrowIconRight />
      </Typography>
      <div className={style.row}>
        {seriesData?.results.slice(0, 6).map((series: Series) => (
          <Card data={{ ...series, type: "series" }} key={series.id} />
        ))}
      </div>
      <Typography variant="h2" component="h2" sx={{ margin: "2rem 0" }}>
        Фильмы набирающие популярность
        <ArrowIconRight />
      </Typography>
      <div className={style.row}>
        {trendingFilmsData?.results.slice(0, 6).map((film: Film) => (
          <Card data={{ ...film, type: "film" }} key={film.id} />
        ))}
      </div>
    </>
  );
}
