//so what we want is whenever a new list or task is created it should be saved in the local storage
//to do so we have to update addList event and addTask event
// we will have to create a function which will save the list to local storage whenever a new task or list is created

export class LocalStorage {
  static saveListToLocalStorage(list) {
    localStorage.setItem("List", JSON.stringify(list));
  }
  static getListFromLocalStorage() {
    let List = JSON.parse(localStorage.getItem("List"));
    console.log(List);
    return List;
  }
}
