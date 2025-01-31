// import { useCallback, useEffect, useRef, useState } from "react";
// import { UserInfo } from "../../domain_Layer/user/UserInfo";
// import { UserInfoService } from "../../application_Layer/fetchDataServices/userService";
// import { getUserInfo } from "../../infrastructure_Layer/fetchData";

// /**
//  * @param {number} id
//  * @returns {UserInfo}
//  */

// export const useUserInfo = (id) => {
//   const [_newUser, setNewUser] = useState(null);
//   const fetchData = useCallback(async () => {
//     const user = await UserInfoService(id, getUserInfo);
//     const newUser = new UserInfo();
//     newUser.userInfoMapper?.(user);
//     setNewUser(newUser);
//   });

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   return { _newUser };
// };
