export default class Store {
  toJSON() {
    return Object.getOwnPropertyNames(this).reduce((a: any, b: any) => {
      a[b] = (this as any)[b];
      return a;
    }, {});
  }
}
