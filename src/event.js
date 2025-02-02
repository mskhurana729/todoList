import { Validate } from "./valid.js";
import { List } from "./lists.js";
import { Render } from "./render.js";
import { Task } from "./tasks.js";
import { LocalStorage } from "./localstorage.js";
export const events = (() => {
  //Buttons and form elements
  const newListButton = document.querySelector(".newListButton");

  const newListInputContainer = document.querySelector(
    ".newListInputContainer"
  );

  const addListButton = document.querySelector(".addListButton");

  const newTaskButton = document.querySelector(".newTaskButton");

  const newTaskFormContainer = document.querySelector(".newTaskFormContainer");

  const newTaskNotesButton = document.querySelector(".newTaskNotes");

  const taskNotesInputContainer = document.querySelector(
    ".taskNotesInputContainer"
  );
  const addNoteButton = document.querySelector(".addNote");

  const addTaskButton = document.querySelector(".addTaskButton");

  //events for all the buttons

  const onPageLoadEvent = (function () {
    window.addEventListener("load", () => {
      if (LocalStorage.getListFromLocalStorage()) {
        List.lists = LocalStorage.getListFromLocalStorage();
        Render.displayLists();
        Render.displaySelectedListTasks();
      }
    });
  })();

  const taskContainerEvent = function () {
    const taskContainers = document.querySelectorAll(".taskContainer");
    taskContainers.forEach((taskContainer) => {
      taskContainer.addEventListener("click", () => {
        Render.displayTaskNotesAndDescription(taskContainer);
      });
    });
  };

  const removeTaskButtonEvent = function () {
    let taskRemoveButtons = document.querySelectorAll(".taskRemoveButton");
    taskRemoveButtons.forEach((taskRemoveButton) => {
      taskRemoveButton.addEventListener("click", () => {
        let taskIndex = taskRemoveButton.dataset.taskindex;
        console.log(taskIndex);
        List.removeTask(taskIndex);
        Render.displaySelectedListTasks();
        LocalStorage.saveListToLocalStorage(List.lists);
      });
    });
  };
  const addTaskButtonEvent = (function () {
    addTaskButton.addEventListener("click", (e) => {
      e.preventDefault();
      let areInputsValid = Validate.validateTaskInputs();
      if (areInputsValid) {
        let newTask = Task.createTask();
        List.addTaskToList(newTask);
        Render.displaySelectedListTasks();
        Render.toggleDisplay(newTaskFormContainer, newTaskButton);
        taskContainerEvent();
        Render.resetTaskForm();
        LocalStorage.saveListToLocalStorage(List.lists);
      }
    });
  })();

  const newTaskNotesButtonEvent = (function () {
    newTaskNotesButton.addEventListener("click", (e) => {
      e.preventDefault();
      Render.toggleDisplay(newTaskNotesButton, taskNotesInputContainer);
    });
  })();

  const addNoteButtonEvent = (function () {
    addNoteButton.addEventListener("click", (e) => {
      e.preventDefault();
      Render.toggleDisplay(newTaskNotesButton, taskNotesInputContainer);
    });
  })();
  const newTaskButtonEvent = (function () {
    newTaskButton.addEventListener("click", (e) => {
      e.preventDefault();
      Render.toggleDisplay(newTaskFormContainer, newTaskButton);
    });
  })();
  const removeListButtonEvent = function () {
    let removeButtons = document.querySelectorAll(".removeListButton");
    removeButtons.forEach((removeButton) => {
      removeButton.addEventListener("click", () => {
        let listToBeRemoved = removeButton.dataset.listname;
        if (listToBeRemoved === List.selectedList) {
          List.selectList(); // this will make the tasks list selected again only if the current selected list is being deleted
        }
        List.deleteListFromListArray(listToBeRemoved);
        Render.displayLists();
        LocalStorage.saveListToLocalStorage(List.lists);
      });
    });
  };

  const addListButtonEvent = (function () {
    addListButton.addEventListener("click", (e) => {
      e.preventDefault();

      let newListName = Validate.validateNewListNameInput();
      if (!newListName) {
        return;
      }

      List.addListToListsArray(newListName);
      Render.toggleDisplay(newListButton, newListInputContainer);
      Render.displayLists();
      LocalStorage.saveListToLocalStorage(List.lists);
    });
  })();

  const newListButtonEvent = (function () {
    newListButton.addEventListener("click", () => {
      Render.toggleDisplay(newListInputContainer, newListButton);
    });
  })();

  const selectListEvent = function () {
    let previousSelectedList = List.selectedList;
    let listNameButtons = document.querySelectorAll(".listNameButton");

    listNameButtons.forEach((listNameButton) => {
      if (listNameButton.textContent == previousSelectedList) {
        Render.changeColorOfSelectedList(listNameButton);
      }
      listNameButton.addEventListener("click", (e) => {
        Render.changeColorOfListsToBlack();
        let selectedListByClick = e.target;
        List.selectList(selectedListByClick.textContent);
        console.log(List.selectedList);
        Render.changeColorOfSelectedList(selectedListByClick);
        Render.displaySelectedListTasks();
      });
    });
  };

  return { removeListButtonEvent, selectListEvent, removeTaskButtonEvent };
})();
