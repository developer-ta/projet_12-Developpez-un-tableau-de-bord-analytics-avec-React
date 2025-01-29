export class UserInfo {
  constructor() {
    this.id = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this.age = undefined;
    this.calorieCount = undefined;
    this.proteinCount = undefined;
    this.todayScore = undefined;
    this.carbohydrateCount = undefined;
    this.lipidCount = undefined;
    this.score = undefined;
  }

  userInfoMapper({ data }) {
    console.log('data: ', data);
    this.id = data.id;
    this.age = data.userInfos.age;
    this.calorieCount = data.keyData.calorieCount;
    this.carbohydrateCount = data.keyData.carbohydrateCount;
    this.lipidCount = data.keyData.lipidCount;
    this.proteinCount = data.keyData.proteinCount;
    this.todayScore = data.todayScore;
    this.score = data.score;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;

    // const data = {
    //   data: {
    //     id: 12,
    //     userInfos: { firstName: "Karl", lastName: "Dovineau", age: 31 },
    //     todayScore: 0.12,
    //     keyData: {
    //       calorieCount: 1930,
    //       proteinCount: 155,
    //       carbohydrateCount: 290,
    //       lipidCount: 50,
    //     },
    //   },
    // };
  }
}
export class UserActivity {
  constructor() {
    this.id = undefined;
    this._sessions = undefined;
  }
  get sessions() {
    return this._sessions;
  }
  set sessions(sessionList) {
    // sessionList.map((ls) => ({
    //   day: ls.day,
    //   kilogram: ls.kilogram,
    //   calories: ls.day,
    // }));
    this._sessions = [...sessionList];
  }
}

export class UserAverageSessions {
  constructor() {
    this.id = undefined;
    this._sessions = undefined;
  }
  get sessions() {
    return this._sessions;
  }
  set sessions(sessionList) {
    this._sessions = [...sessionList];
  }
}

export class UserPerformance {
  constructor() {
    this.id = undefined;
    this._kind = undefined;
    this.data = undefined;
  }
  get kind() {
    return this._kind;
  }
  set kind(kindObj) {
    this._kind = Object.values(kindObj);
  }
}
