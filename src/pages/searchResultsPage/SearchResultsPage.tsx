import { useLocation } from "react-router-dom";
import { useGetByKeywordQuery } from "../../store/api";

export const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const { data } = useGetByKeywordQuery(`${query}`);

  return (
    <div>
      <h1>Search results</h1>
      <div>
        {data?.results.map((item) => (
          <div key={item.id}>{item.title || item.name || "Untitled"}</div>
        ))}
      </div>
    </div>
  );
};
