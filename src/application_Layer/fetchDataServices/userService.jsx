import { UserActivity } from "../../domain_Layer/user/UserActivity";
import { UserAverageSessions } from "../../domain_Layer/user/UserAverageSessions";
import { UserInfo } from "../../domain_Layer/user/UserInfo";
import { UserPerformance } from "../../domain_Layer/user/UserPerformance";
import { getUserInfo } from "../../infrastructure_Layer/fetchData";

/**
 * @param {number} userId
 * @param {UserInfo} NewUserInfo
 * @returns {Promise<UserInfo>}
 */
export async function UserApiService(id, urlKeyAction) {
  let urlUserHref = `http://localhost:3000/user/${id}/`;
  let componentData = null;
  let _userInfo = null;

  if (!urlKeyAction) {
    componentData = new UserInfo();
  } else if (urlKeyAction == "activity") {
    urlUserHref += urlKeyAction;
    componentData = new UserActivity();
  } else if (urlKeyAction == "average-sessions") {
    urlUserHref += urlKeyAction;
    componentData = new UserAverageSessions();
  } else if (urlKeyAction == "performance") {
    componentData = new UserPerformance();
  }

  _userInfo = await getUserInfo(urlUserHref);
  
  componentData.userMapper(_userInfo);

  return componentData;
}

// function userApiReducer(state, { type }) {
//   const [urlKeyAction, id] = type;

//   const getData = (data) => (state = data);

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
