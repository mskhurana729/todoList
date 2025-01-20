export class List {
  static lists = { tasks: [] };
  static selectedList = "tasks";

  static addListToListsArray(list) {
    this.lists[list] = [];
    console.log(this.lists);
  }
  static deleteListFromListArray(list) {
    delete this.lists[list];
  }
  static selectList(list = "tasks") {
    this.selectedList = list;
  }
  static addTaskToList(task) {
    this.lists[this.selectedList].push(task);
  }
}
