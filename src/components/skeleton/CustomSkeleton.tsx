import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

type SkeletonProps = {
  count?: number;
};

export default function CustomSkeleton({ count = 12 }: SkeletonProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {Array.from({ length: count }, (_, index) => (
        <Stack
          spacing={1}
          key={index}
          data-testid="content-skeleton"
          sx={{ flex: "1 1 300px" }}
        >
          <Skeleton variant="rectangular" height={400} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Stack>
      ))}
    </div>
  );
}
