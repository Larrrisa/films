import { useGetFilmsQuery } from "../../store/api";
import { Typography } from "@mui/material";

export function MainPage() {
  // const { data } = useGetFilmsQuery();

  return (
    <>
      <Typography variant="h1" component="h1">
        Main Page
      </Typography>
    </>
  );
}
