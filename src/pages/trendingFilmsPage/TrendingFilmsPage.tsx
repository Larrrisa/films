import { Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router";

import PaginationControlled from "../../components/pagination/Pagination";
import Card from "../../components/сard/Card";
import { useGetTrendingFilmsQuery } from "../../store/api";
import { Film } from "../../types/types";

import style from "./styles.module.css";

export function TrendingFilmsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data } = useGetTrendingFilmsQuery();
  const filmsData = data?.results;
  const totalPages = data?.total_pages || 0;
  const [searchParams, setSearchParams] = useSearchParams();

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <>
      <Typography variant="h1">Trending films</Typography>
      <div className={style.container}>
        {filmsData?.map((film: Film) => (
          <Card data={{ ...film, type: "film" }} key={film.id} width={300} />
        ))}
        {/* <PaginationControlled
          totalPage={totalPages}
          page={currentPage}
          onPageChange={changePage}
        /> */}
      </div>
    </>
  );
}
