import { useParams } from "react-router";
import style from "./styles.module.css";
import { useGetFilmQuery } from "../../store/api";
import { Genre } from "../../types/types";
export function FullInfoPage() {
  const { id } = useParams();
  const data = useGetFilmQuery(Number(id));

  const itemData = data?.data;

  return (
    <>
      <h1>{itemData?.title}</h1>
      <p>{itemData?.tagline}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${itemData?.poster_path}`}
        alt={itemData?.title}
      />

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
    </>
  );
}
