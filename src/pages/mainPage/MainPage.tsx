import {
  useGetFilmsQuery,
  useGetShowsQuery,
  useGetTrendingFilmsQuery,
} from "../../store/api";
import { Typography } from "@mui/material";
import Card from "../../components/сard/Card";
import { Film, Shows } from "../../types/types";
import style from "./styles.module.css";
import { ArrowIconRight } from "../../components/icons";
import { Link } from "react-router-dom";
export function MainPage() {
  const { data: filmsData } = useGetFilmsQuery(1);
  const { data: seriesData } = useGetShowsQuery(1);
  const { data: trendingFilmsData } = useGetTrendingFilmsQuery();

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
        {filmsData?.results.slice(0, 4).map((film: Film) => (
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
        {seriesData?.results.slice(0, 4).map((series: Shows) => (
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
        {trendingFilmsData?.results.slice(0, 4).map((film: Film) => (
          <Card data={{ ...film, type: "film" }} key={film.id} />
        ))}
      </div>
    </>
  );
}
