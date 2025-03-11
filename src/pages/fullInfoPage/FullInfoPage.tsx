import { useParams } from "react-router";
import style from "./styles.module.css";
import { useGetFilmQuery } from "../../store/api";
import { Genre } from "../../types/types";
import { Typography } from "@mui/material";

export function FullInfoPage() {
  const { id } = useParams();
  const data = useGetFilmQuery(Number(id));

  const itemData = data?.data;

  return (
    <section className={style.main}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${itemData?.poster_path}`}
          alt={itemData?.title}
        />
      </div>
      <div className={style.info}>
        <Typography variant="h1" component="h1">
          {itemData?.title}
        </Typography>
        <p>{itemData?.tagline}</p>
        <p>{itemData?.release_date}</p>
        <p>
          URL: <a>{itemData?.homepage}</a>
        </p>
        <p>{itemData?.overview}</p>
        <div>
          Genres:
          {itemData?.genres.map((genre: Genre) => (
            <p>{genre.name}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
