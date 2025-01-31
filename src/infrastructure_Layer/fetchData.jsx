// const urlBase = "http://localhost:3000/";

// /**
//  * @typedef{Object}
//  * @property{string}firstName
//  * @property{string}lastName
//  * @property{number}age
//  *
//  */

// /**
//  * @typedef{Object}KeyData
//  * @property{number}calorieCount
//  * @property{number}proteinCount
//  * @property{number}carbohydrateCount
//  * @property{number}lipidCount
//  *
//  */
// /**
//  * @typedef{Object}User
//  * @property{*}id
//  * @property{UserInfos}userInfos
//  * @property{number}todayScore
//  * @property{KeyData}keyData
//  *
//  */

/**
 *
 * @param {*} id
 * @returns {Promise<object>}
 */
export async function getUserInfo(urlHref) {
  // const urlHref = urlBase.concat("user/" + id);
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

// export async function getUserActivity(id) {
//   const urlHref = urlBase.concat("user/" + id + "activity");
//   const data = await fetchGetData(urlHref);

//   return data;
// }

// export async function getUserAverageSessions(id) {
//   const urlHref = urlBase.concat("user/" + id + "average-sessions");
//   const data = await fetchGetData(urlHref);

//   return data;
// }

// export async function getUserPerformance(id) {
//   const urlHref = urlBase.concat("user/" + id + "performance");
//   const data = await fetchGetData(urlHref);

//   return data;
// }
