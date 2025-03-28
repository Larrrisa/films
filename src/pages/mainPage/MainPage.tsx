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
import { Link } from "react-router-dom";
export function MainPage() {
  const { data: filmsData } = useGetFilmsQuery();
  const { data: seriesData } = useGetSeriesQuery();
  const { data: trendingFilmsData } = useGetTrendingFilmsQuery();

  console.log(trendingFilmsData);

  return (
    <>
      <div className={style.heading}>
        <Typography variant="h2" component="h2">
          Popular films
        </Typography>
        <Link to="/films">
          <ArrowIconRight />
        </Link>
      </div>

      <div className={style.row}>
        {filmsData?.results.slice(0, 5).map((film: Film) => (
          <Card data={{ ...film, type: "film" }} key={film.id} />
        ))}
      </div>
      <div className={style.heading}>
        <Typography variant="h2" component="h2">
          Popular TV shows
        </Typography>
        <Link to="/shows">
          <ArrowIconRight />
        </Link>
      </div>
      <div className={style.row}>
        {seriesData?.results.slice(0, 5).map((series: Series) => (
          <Card data={{ ...series, type: "series" }} key={series.id} />
        ))}
      </div>
      <div className={style.heading}>
        <Typography variant="h2" component="h2">
          Trending films
        </Typography>
        <Link to="/trending">
          <ArrowIconRight />
        </Link>
      </div>
      <div className={style.row}>
        {trendingFilmsData?.results.slice(0, 5).map((film: Film) => (
          <Card data={{ ...film, type: "film" }} key={film.id} />
        ))}
      </div>
    </>
  );
}
