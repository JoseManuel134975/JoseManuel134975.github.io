import { useLocation } from "react-router";

export default function useQuery() {
  const search = useLocation();

  return new URLSearchParams(useLocation().search);
}
