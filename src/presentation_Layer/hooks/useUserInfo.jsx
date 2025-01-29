import { useCallback, useEffect, useRef, useState } from "react";
import { UserInfo } from "./../../domain_Layer/User";
import { UserInfoService } from "../../application_Layer/fetchDataServices/userService";
import { getUserById } from "../../infrastructure_Layer/fetchData";

/**
 * @param {number} id
 * @returns {UserInfo}
 */

export const useUserInfo = (id) => {
  const [_newUser, setNewUser] = useState(new UserInfo());

  useEffect(() => {
    const newUserPromise = UserInfoService(id, _newUser, getUserById);
    newUserPromise.then((res) => setNewUser(res));
  }, [id]);

  return { _newUser };
};
