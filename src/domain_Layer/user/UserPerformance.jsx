export class UserPerformance {
  constructor() {
    this.id = undefined;
    // this.kind = undefined;
    this.data = undefined;
  }

  userMapper({ data }) {
    //convert data.dat.kind 
    data.data.forEach(
      (d) => (d.kind = data.kind[d.kind]),
    );
    this.id = data.userId;
    this.data = data.data;
    
  }
}
