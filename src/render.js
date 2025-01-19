import { List } from "./lists.js";
import { events } from "./event.js";
export class Render {
  static toggleNewTaskFormContainerAndButtonDisplay() {
    const newTaskButton = document.querySelector(".newTaskButton");
    const newTaskFormContainer = document.querySelector(
      ".newTaskFormContainer"
    );
    if (
      newTaskFormContainer.style.display === "block" &&
      newTaskButton.style.display === "none"
    ) {
      newTaskFormContainer.style.display = "none";
      newTaskButton.style.display = "inline";
    } else {
      newTaskFormContainer.style.display = "block";
      newTaskButton.style.display = "none";
    }
  }
  static displayInvalidListNameError(boolean) {
    let listNameValidationArea = document.querySelector(
      ".listNameValidationArea"
    );
    if (boolean) {
      listNameValidationArea.textContent = "Please Provide The List Name";
    } else {
      listNameValidationArea.textContent = "";
    }
  }

  static changeColorOfListsToBlack() {
    let listNameButtons = document.querySelectorAll(".listNameButton");
    listNameButtons.forEach((listNameButton) => {
      listNameButton.style.color = "Black";
    });
  }
  static changeColorOfSelectedList(list) {
    list.style.color = "Blue";
  }
  static toggleNewListInputContainerAndButtonDisplay() {
    const newListButton = document.querySelector(".newListButton");

    const newListInputContainer = document.querySelector(
      ".newListInputContainer"
    );
    if (
      newListInputContainer.style.display === "block" &&
      newListButton.style.display === "none"
    ) {
      newListInputContainer.style.display = "none";
      newListButton.style.display = "inline";
    } else {
      newListInputContainer.style.display = "block";
      newListButton.style.display = "none";
    }
  }

  static createNewListElements(list) {
    const listContainer = document.createElement("div");
    listContainer.classList.add("listContainer");

    const listName = document.createElement("button");
    listName.classList.add("listNameButton");
    listName.textContent = list;
    listContainer.appendChild(listName);
    if (list !== "tasks") {
      const removeListButton = document.createElement("button");
      removeListButton.classList.add("removeListButton");
      removeListButton.setAttribute("data-listName", list); //we will use this when we want to remove the list
      removeListButton.textContent = "X";
      listContainer.appendChild(removeListButton);
    }

    return listContainer;
  }
  static displayLists() {
    const listRenderingArea = document.querySelector(".listsRenderingArea");
    listRenderingArea.textContent = "";
    let listNames = Object.keys(List.lists);
    listNames.forEach((list) => {
      listRenderingArea.appendChild(this.createNewListElements(list));
    });
    events.removeListButtonEvent();
    events.selectListEvent();
  }
}
