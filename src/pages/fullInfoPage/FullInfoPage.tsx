import { useParams } from "react-router";

import { useGetFilmQuery } from "../../store/api";

export function FullInfoPage() {
  const { id } = useParams();
  const data = useGetFilmQuery(Number(id));

  return <>SignInPage</>;
}
