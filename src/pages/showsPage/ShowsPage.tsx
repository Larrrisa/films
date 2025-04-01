import style from "./styles.module.css";
import { useGetShowsQuery } from "../../store/api";
import Card from "../../components/сard/Card";
import { Shows } from "../../types/types";

export function ShowsPage() {
  const { data } = useGetShowsQuery();
  const filmsData = data?.results;

  return (
    <div className={style.container}>
      {filmsData?.map((show: Shows) => (
        <Card data={{ ...show, type: "show" }} key={show.id} width={300} />
      ))}
    </div>
  );
}
