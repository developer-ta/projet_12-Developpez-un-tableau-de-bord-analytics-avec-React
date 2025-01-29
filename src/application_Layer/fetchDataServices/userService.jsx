import { UserInfo } from "../../domain_Layer/User";

/**
 * @param {number} userId
 * @param {UserInfo} NewUserInfo
 * @returns {Promise<UserInfo>}
 */
export async function UserInfoService(userId, getUserById) {
  const _userInfo = await getUserById(userId);
  return _userInfo;

  // NewUserInfo.userInfoMapper?.(_userInfo);
}
// NewUserInfo.id = _userInfo.id;
// NewUserInfo.age = _userInfo.userInfos.age;
// NewUserInfo.calorieCount = _userInfo.keyData.calorieCount;
// NewUserInfo.carbohydrateCount = _userInfo.keyData.carbohydrateCount;
// NewUserInfo.lipidCount = _userInfo.keyData.lipidCount;
// NewUserInfo.proteinCount = _userInfo.keyData.proteinCount;
// NewUserInfo.todayScore = _userInfo.todayScore;
// NewUserInfo.score = _userInfo.score;
// NewUserInfo.firstName = _userInfo.userInfos.firstName;
// NewUserInfo.lastName = _userInfo.userInfos.lastName;
