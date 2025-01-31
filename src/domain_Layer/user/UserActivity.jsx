export class UserActivity {
  constructor() {
    this.id = undefined;
    this.sessions = undefined;
  }
  // get sessions() {
  //   return this._sessions;
  // }
  // set sessions(sessionList) {

  //   this._sessions = [...sessionList];
  // }
  userMapper({ data }) {
    this.id = data.id;
    this.sessions = data.sessions;
  }
}
