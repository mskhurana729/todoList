import { List } from "./lists.js";
import { events } from "./event.js";
export class Render {
  static toggleDisplay(elem1, elem2) {
    if (elem1.style.display === "block" && elem2.style.display === "none") {
      elem1.style.display = "none";
      elem2.style.display = "inline";
    } else {
      elem1.style.display = "block";
      elem2.style.display = "none";
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
  static showError(area) {
    const errorSpan = area.childNodes[4];
    if (errorSpan) {
      errorSpan.textContent = "Required";
      return;
    }
    let newErrorSpan = document.createElement("span");
    newErrorSpan.textContent = "Required";
    newErrorSpan.classList.add(".errorSpan");
    area.appendChild(newErrorSpan);
  }

  static removeError(area) {
    const errorSpan = area.childNodes[4];
    if (errorSpan) {
      errorSpan.textContent = "";
    }
  }
  //we want to display all the tasks in the selected list
  //a task should have a check mark to change the status to complete and Tittle , due date and a delete button
  //whenever the task is clicked it should expand and show task notes which should be editable

  static createTaskElements(task, counter) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskContainer");
    const taskCheckbox = document.createElement("input");
    taskCheckbox.classList.add("taskCheckbox");
    taskCheckbox.setAttribute("data-taskIndex", counter);

    taskDiv.appendChild(taskCheckbox);
    const taskTittle = document.createElement("span");
    taskTittle.classList.add("taskTittle");
    taskTittle.textContent = task.tittle;
    taskDiv.appendChild(taskTittle);
    const taskRemoveButton = document.createElement("button");
    taskRemoveButton.classList.add("taskRemoveButton");
    taskRemoveButton.setAttribute("data-taskIndex", counter);
    taskRemoveButton.textContent = "X";
    taskDiv.appendChild(taskRemoveButton);

    const taskDueDate = document.createElement("span");
    taskDueDate.classList.add(".taskDueDate");
    taskDueDate.textContent = task.dueDate;
    taskDiv.appendChild(taskDueDate);

    const taskNotes = document.createElement("p");
    taskNotes.classList.add("taskNotes");
    taskNotes.textContent = task.notes;
    taskDiv.appendChild(taskNotes);

    return taskDiv;
  }

  static displaySelectedListTasks() {
    let selectedList = List.selectedList;
    const taskRenderingArea = document.querySelector(".tasksRenderingArea");
    taskRenderingArea.textContent = "";
    // taskRenderingArea.textContent = List.lists[selectedList][0];
    // console.log(List.lists[selectedList]);
    let counter = 0;
    List.lists[selectedList].forEach((task) => {
      let taskToBeDisplayed = this.createTaskElements(task, counter);
      counter++;
      taskRenderingArea.appendChild(taskToBeDisplayed);
    });
  }
}
