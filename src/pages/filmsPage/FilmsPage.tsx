import React from "react";
import style from "./styles.module.css";
import { useGetFilmsQuery } from "../../store/api";
import Card from "../../components/сard/Card";
import { Film } from "../../types/types";

export function FilmsPage() {
  const { data } = useGetFilmsQuery();
  const filmsData = data?.results;

  return (
    <div className={style.container}>
      {filmsData?.map((film: Film) => (
        <Card data={{ ...film, type: "film" }} key={film.id} width={300} />
      ))}
    </div>
  );
}
