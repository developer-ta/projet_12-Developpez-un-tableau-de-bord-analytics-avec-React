export class UserActivity {
  constructor() {
    this.id = undefined;
    this.sessions = undefined;
  }

  /**
   *
   * @param {sessions} sessions
   */
  dayAdapter(sessions) {
    sessions.forEach((el) => {
      let day = el.day.split("-").reverse().at(0);
      el.day = day >= 10 ? day : day.at(1);
      el.day = Number(el.day);
    });
    return sessions;
  }

  userMapper({ data }) {
    this.id = data.userId;
   
    this.sessions = this.dayAdapter(data.sessions);
  }
}
// const sessions = [
//   {
//     day: "2020-07-01",
//     kilogram: 80,
//     calories: 240,
//   },
//   {
//     day: "2020-07-02",
//     kilogram: 80,
//     calories: 220,
//   },
//   {
//     day: "2020-07-03",
//     kilogram: 81,
//     calories: 280,
//   },
//   {
//     day: "2020-07-04",
//     kilogram: 81,
//     calories: 290,
//   },
//   {
//     day: "2020-07-05",
//     kilogram: 80,
//     calories: 160,
//   },
//   {
//     day: "2020-07-06",
//     kilogram: 78,
//     calories: 162,
//   },
//   {
//     day: "2020-07-07",
//     kilogram: 76,
//     calories: 390,
//   },
// ];