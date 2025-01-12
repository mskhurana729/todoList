export class List {
  constructor() {
    let lists = ["Tasks"];
  }
  static addList(list) {
    this.lists.push(list);
  }
}
