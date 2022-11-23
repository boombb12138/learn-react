import { useContext } from "react";
import { UserContext, TokenContext } from "../Context/index";

function useUserToken() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  return [user, token];
}
export default useUserToken;
