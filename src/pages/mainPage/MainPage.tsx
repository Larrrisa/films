import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { ArrowIconRight } from "../../components/icons";
import CustomSkeleton from "../../components/skeleton/CustomSkeleton";
import Card from "../../components/сard/Card";
import {
  useGetFilmsQuery,
  useGetShowsQuery,
  useGetTrendingFilmsQuery,
} from "../../store/api";
import { Film, Shows } from "../../types/types";

import style from "./styles.module.css";

export function MainPage() {
  const { data: filmsData, isLoading: isFilmsDataLoading } =
    useGetFilmsQuery(1);
  const { data: seriesData, isLoading: isSeriesDataLoading } =
    useGetShowsQuery(1);
  const { data: trendingFilmsData, isLoading: isTrendingFilmsDataLoading } =
    useGetTrendingFilmsQuery();

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

      <div>
        {isFilmsDataLoading ? (
          <CustomSkeleton count={4} />
        ) : (
          <div className={style.row}>
            {filmsData?.results.slice(0, 4).map((film: Film) => (
              <Card data={{ ...film, type: "film" }} key={film.id} />
            ))}
          </div>
        )}
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
        {isSeriesDataLoading ? (
          <CustomSkeleton count={4} />
        ) : (
          seriesData?.results
            .slice(0, 4)
            .map((series: Shows) => (
              <Card data={{ ...series, type: "series" }} key={series.id} />
            ))
        )}
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
        {isTrendingFilmsDataLoading ? (
          <CustomSkeleton count={4} />
        ) : (
          trendingFilmsData?.results
            .slice(0, 4)
            .map((film: Film) => (
              <Card data={{ ...film, type: "film" }} key={film.id} />
            ))
        )}
      </div>
    </>
  );
}
