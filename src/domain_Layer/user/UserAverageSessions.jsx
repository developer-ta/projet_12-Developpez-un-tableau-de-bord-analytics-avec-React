export class UserAverageSessions {
  constructor() {
    this.id = undefined;
    this.sessions = undefined;
  }

  userMapper({ data }) {
    this.id = data.userId;
    this.sessions = this.dayAdapter(data.sessions);
  }
  dayAdapter(sessions) {
    const daysName = ["", "L", "M", "M", "J", "V", "S", "D"];
    sessions.forEach((session) => (session.day = daysName[session.day]));

    return sessions;
  }
}
  