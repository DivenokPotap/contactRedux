import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh, selectUser } from "./authSelectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
