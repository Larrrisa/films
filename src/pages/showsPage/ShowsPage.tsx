import style from "./styles.module.css";
import React from "react";
import { useGetShowsQuery } from "../../store/api";
import Card from "../../components/сard/Card";
import { Shows } from "../../types/types";
import { Typography } from "@mui/material";
import PaginationControlled from "../../components/pagination/Pagination";
import { useSearchParams } from "react-router";

export function ShowsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data } = useGetShowsQuery(currentPage);
  const showsData = data?.results;

  const totalPages = data?.total_pages || 0;
  const [searchParams, setSearchParams] = useSearchParams();

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <>
      <Typography variant="h1">TV shows</Typography>
      <div className={style.container}>
        {showsData?.map((show: Shows) => (
          <Card data={{ ...show, type: "show" }} key={show.id} width={300} />
        ))}
        <PaginationControlled
          totalPage={totalPages}
          page={currentPage}
          onPageChange={changePage}
        />
      </div>
    </>
  );
}
