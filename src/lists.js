export class List {
  static lists = { tasks: [] };

  static addListToListsArray(list) {
    this.lists[list] = [];
    console.log(this.lists);
  }
  static deleteListFromListArray(list) {
    delete this.lists[list];
  }
}
