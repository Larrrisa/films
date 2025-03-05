import { useGetFilmsQuery } from "../../store/api";
import { Typography } from "@mui/material";
import Card from "../../components/Card/Card";
export function MainPage() {
  // const { data } = useGetFilmsQuery();

  return (
    <>
      <Typography variant="h1" component="h1">
        <Card />
      </Typography>
    </>
  );
}
