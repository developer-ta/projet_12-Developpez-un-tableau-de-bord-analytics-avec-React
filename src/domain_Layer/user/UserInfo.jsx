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
  
	userMapper({ data }) {
	  if (data) {
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
    }
	
  
	
	}
  }