import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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
    <Stack spacing={2}>
      <Pagination count={totalPage} page={page} onChange={handleChange} />
    </Stack>
  );
}
