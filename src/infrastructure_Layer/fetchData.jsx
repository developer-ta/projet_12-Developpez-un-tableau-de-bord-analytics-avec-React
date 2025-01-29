const urlBase = "http://localhost:3000/";
import { UserInfo } from "./../domain_Layer/User";
/**
 * @typedef{Object}UserInfos
 * @property{string}firstName
 * @property{string}lastName
 * @property{number}age
 *
 */

/**
 * @typedef{Object}KeyData
 * @property{number}calorieCount
 * @property{number}proteinCount
 * @property{number}carbohydrateCount
 * @property{number}lipidCount
 *
 */
/**
 * @typedef{Object}User
 * @property{*}id
 * @property{UserInfos}userInfos
 * @property{number}todayScore
 * @property{KeyData}keyData
 *
 */

/**
 *
 * @param {*} id
 * @returns {Promise<User>}
 */
export async function getUserById(id) {
  const urlHref = urlBase.concat("user/" + id);
  const data = await fetchGetData(urlHref);

  return data;
}

async function fetchGetData(urlString) {
  try {
    const res = await fetch(urlString);

    if (res.ok) return res.json();

    throw new Error("Not funded any data");
  } catch (error) {
    console.log("error request not succeed!  " + error);
  }
}
