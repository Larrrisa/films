import React from "react";
import style from "./styles.module.css";
import { useGetFilmsQuery } from "../../store/api";
import Card from "../../components/сard/Card";
import { Film } from "../../types/types";
import PaginationControlled from "../../components/pagination/Pagination";
import { useSearchParams } from "react-router";

export function FilmsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data } = useGetFilmsQuery(currentPage);
  const filmsData = data?.results;
  const totalPages = data?.total_pages;
  const [searchParams, setSearchParams] = useSearchParams();

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className={style.container}>
      {filmsData?.map((film: Film) => (
        <Card data={{ ...film, type: "film" }} key={film.id} width={300} />
      ))}
      <PaginationControlled
        totalPage={totalPages}
        page={currentPage}
        onPageChange={changePage}
      />
    </div>
  );
}
