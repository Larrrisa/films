import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { useSearchParams } from "react-router";

import PaginationControlled from "../../components/pagination/Pagination";
import CustomSkeleton from "../../components/skeleton/CustomSkeleton";
import Card from "../../components/сard/Card";
import { useGetFilmsQuery } from "../../store/api";
import { Film } from "../../types/types";

import style from "./styles.module.css";

export function FilmsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data, isLoading } = useGetFilmsQuery(currentPage);
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
      <Typography variant="h1">Films</Typography>
      <Stack className={style.container} direction={"column"} spacing={2}>
        <Stack flexWrap={"wrap"} direction={"row"} gap={2}>
          {isLoading ? (
            <CustomSkeleton count={12} />
          ) : (
            filmsData?.map((film: Film) => (
              <Card
                data={{ ...film, type: "film" }}
                key={film.id}
                width={300}
              />
            ))
          )}
        </Stack>

        <Stack>
          <PaginationControlled
            totalPage={totalPages}
            page={currentPage}
            onPageChange={changePage}
          />
        </Stack>
      </Stack>
    </>
  );
}
