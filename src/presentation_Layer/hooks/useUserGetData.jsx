import { useCallback, useEffect, useReducer, useRef, useState } from "react";

import { UserApiService } from "../../application_Layer/fetchDataServices/userService";
import { getUserInfo } from "../../infrastructure_Layer/fetchData";

import { UserActivity } from "../../domain_Layer/user/UserActivity";

import { UserAverageSessions } from "../../domain_Layer/user/UserAverageSessions";
import { UserPerformance } from "../../domain_Layer/user/UserPerformance";
import { UserInfo } from "../../domain_Layer/user/UserInfo";

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

// function userApiReducer(state, { urlKeyAction }) {
//   switch (urlKeyAction) {
//     case undefined:
//       componentData = new UserInfo();
//       UserApiService(urlUserHref, componentData, getData);
//       return state;
//     case "activity":
//       urlUserHref += urlKeyAction;
//       componentData = new UserActivity();
//       UserApiService(urlUserHref, getData);
//       return componentData.userMapper(state);
//     case "average-sessions":
//       urlUserHref += urlKeyAction;
//       componentData = new UserAverageSessions();
//       UserApiService(urlUserHref, getData);
//       return componentData.userMapper(state);
//     case "performance":
//       componentData = new UserPerformance();
//       UserApiService(urlUserHref, getData);
//       return componentData.userMapper(state);

//     default:
//       throw new Error("erreur 404 ");
//   }
// }
