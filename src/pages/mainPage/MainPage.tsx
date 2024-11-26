import { useGetFilmsQuery } from "../../store/api";

export function MainPage() {
  const { data } = useGetFilmsQuery();
  console.log(data);

  return <>MainPage</>;
}
