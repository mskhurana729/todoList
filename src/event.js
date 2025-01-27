import { Validate } from "./valid.js";
import { List } from "./lists.js";
import { Render } from "./render.js";
import { Task } from "./tasks.js";
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

  //whenever the add task button is clicked, it should check that tittle description ,dueDate, priority are not empty
  //then it should create a task with all the inputs data
  //then it should add that task to the selected list
  //then it should show the tasks in the taskRendering area

  const addTaskButtonEvent = (function () {
    addTaskButton.addEventListener("click", (e) => {
      e.preventDefault();
      let areInputsValid = Validate.validateTaskInputs();
      if (areInputsValid) {
        let newTask = Task.createTask();
        List.addTaskToList(newTask);
        Render.displaySelectedListTasks();
        Render.toggleDisplay(newTaskFormContainer, newTaskButton);
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
      removeButton.addEventListener("click", (e) => {
        let listToBeRemoved = removeButton.dataset.listname;
        if (listToBeRemoved === List.selectedList) {
          List.selectList(); // this will make the tasks list selected again only if the current selected list is being deleted
        }
        List.deleteListFromListArray(listToBeRemoved);
        Render.displayLists();
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
    });
  })();

  const newListButtonEvent = (function () {
    newListButton.addEventListener("click", (e) => {
      Render.toggleDisplay(newListInputContainer, newListButton);
    });
  })();
  //what we need is that we want to keep the color changed of the selected list

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
      });
    });
  };

  return { removeListButtonEvent, selectListEvent };
})();
