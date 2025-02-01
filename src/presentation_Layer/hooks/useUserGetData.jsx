import { useCallback, useEffect, useReducer, useRef, useState } from "react";

import { UserApiService } from "../../application_Layer/fetchDataServices/userService";


/**
 * @param {number} id
 * @returns {object}
 */

export const useUserGetData = (id, typeApi) => {
  const [_newUser, setNewUser] = useState(null);

  useEffect(() => {
   
    const fetchData = async () => {
      const userdata = await UserApiService(id, typeApi);
     
      setNewUser(userdata);
    };
    fetchData();
  }, [id]);
 
  return { _newUser };
};

export const apiType = {
  activity: "activity",
  averageSessions: "average-sessions",
  userInfo: undefined,
  performance: "performance",
};

