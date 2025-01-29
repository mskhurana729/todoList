import { List } from "./lists.js";
import { events } from "./event.js";
export class Render {
  static displayTaskNotesAndDescription(taskContainer) {
    let taskNotes = taskContainer.querySelector(".taskNotes");
    let taskDescription = taskContainer.querySelector(".taskDescription");
    taskNotes.style.display = "block";
    taskDescription.style.display = "block";
  }
  static toggleDisplay(elem1, elem2) {
    if (elem1.style.display === "block" && elem2.style.display === "none") {
      elem1.style.display = "none";
      elem2.style.display = "inline";
    } else if (
      elem1.style.display === "block" &&
      elem2.style.display === "block"
    ) {
      elem1.style.display = "none";
      elem2.style.display = "none";
    } else if (
      elem1.style.display === "none" &&
      elem2.style.display === "none"
    ) {
      elem1.style.display = "block";
      elem2.style.display = "block";
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

  static resetTaskForm() {
    document.querySelector("#taskTittle").value = "";
    document.querySelector("#taskDescription").value = "";
    document.querySelector("#taskDueDate").value = "";
    document.querySelector("#taskPriority").value = "medium";
    document.querySelector("#taskNotes").value = "";
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
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.setAttribute("data-taskIndex", counter);

    taskDiv.appendChild(taskCheckbox);
    const taskTittle = document.createElement("span");
    taskTittle.classList.add("taskTittle");
    taskTittle.textContent = task.tittle;
    taskDiv.appendChild(taskTittle);

    const taskDueDate = document.createElement("span");
    taskDueDate.classList.add(".taskDueDate");
    taskDueDate.textContent = task.dueDate;
    taskDiv.appendChild(taskDueDate);

    const taskRemoveButton = document.createElement("button");
    taskRemoveButton.classList.add("taskRemoveButton");
    taskRemoveButton.setAttribute("data-taskIndex", counter);
    taskRemoveButton.textContent = "X";
    taskDiv.appendChild(taskRemoveButton);

    const taskNotes = document.createElement("p");
    taskNotes.classList.add("taskNotes");
    taskNotes.textContent = task.notes;
    taskNotes.style.display = "none";
    taskNotes.setAttribute("contentEditable", "true");
    taskDiv.appendChild(taskNotes);

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("taskDescription");
    taskDescription.textContent = task.description;
    taskDescription.setAttribute("contentEditable", "true");

    taskDescription.style.display = "none";
    taskDiv.appendChild(taskDescription);

    return taskDiv;
  }

  static displaySelectedListTasks() {
    let selectedList = List.selectedList;
    const taskRenderingArea = document.querySelector(".tasksRenderingArea");
    taskRenderingArea.textContent = "";

    let counter = 0;
    List.lists[selectedList].forEach((task) => {
      let taskToBeDisplayed = this.createTaskElements(task, counter);
      counter++;
      taskRenderingArea.appendChild(taskToBeDisplayed);
    });
    events.removeTaskButtonEvent();
  }
}
