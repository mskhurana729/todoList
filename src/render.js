import { List } from "./lists.js";
import { events } from "./event.js";
export class Render {
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

    const listName = document.createElement("span");
    listName.classList.add("listName");
    listName.textContent = list;

    const removeListButton = document.createElement("button");
    removeListButton.classList.add("removeListButton");
    removeListButton.setAttribute("data-listName", list); //we will use this when we want to remove the list
    removeListButton.textContent = "X";
    console.log(removeListButton);
    listContainer.appendChild(listName);
    listContainer.appendChild(removeListButton);
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
  }

  //     for (list in List.lists) {
  //       const listContainer = document.createElement("div");
  //       const listName = document.createElement("span");
  //       listName.textContent = list;
  //       console.log(listName);
  //     }
}
