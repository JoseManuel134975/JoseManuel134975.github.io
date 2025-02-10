import { useLocation } from "react-router";

export default function useQuery() {
  const search = useLocation();
  console.log("useQuery.search", search);

  return new URLSearchParams(useLocation().search);
}
