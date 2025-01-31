export class UserPerformance {
  constructor() {
    this.id = undefined;
    this.kind = undefined;
    this.data = undefined;
  }
  userMapper({ data }) {
    this.id = data.id;
    this.kind = data.kind;
    this.data = data.data;
  }
}
// data = {
//   userId: 12,
//   kind: {
//     1: "cardio",
//     2: "energy",
//     3: "endurance",
//     4: "strength",
//     5: "speed",
//     6: "intensity",
//   },
//   data: [
//     {
//       value: 80,
//       kind: 1,
//     },
//     {
//       value: 120,
//       kind: 2,
//     },
//     {
//       value: 140,
//       kind: 3,
//     },
//     {
//       value: 50,
//       kind: 4,
//     },
//     {
//       value: 200,
//       kind: 5,
//     },
//     {
//       value: 90,
//       kind: 6,
//     },
//   ],
// };
