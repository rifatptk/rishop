import { useSelector } from "react-redux";

export default function useIsAdmin() {
  const userRole = useSelector((state) => state.auth.role);
  if (userRole === "admin") return true;
  return false;
}
