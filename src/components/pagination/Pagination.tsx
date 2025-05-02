import * as React from "react";
import Pagination from "@mui/material/Pagination";
import style from "./styles.module.css";

type Props = {
  page: number;
  totalPage: number;
  onPageChange: (value: number) => void;
};

export default function PaginationControlled({
  page,
  totalPage,
  onPageChange,
}: Props) {
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <div className={style.pagination}>
      <Pagination count={totalPage} page={page} onChange={handleChange} />
    </div>
  );
}
