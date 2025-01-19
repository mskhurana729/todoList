import { Validate } from "./valid.js";
import { List } from "./lists.js";
import { Render } from "./render.js";
export const events = (() => {
  const newListButton = document.querySelector(".newListButton");

  const addListButton = document.querySelector(".addListButton");

  const addTaskButton = document.querySelector(".newTaskButton");

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
      Render.toggleNewListInputContainerAndButtonDisplay();
      Render.displayLists();
    });
  })();

  const newListButtonEvent = (function () {
    newListButton.addEventListener("click", (e) => {
      Render.toggleNewListInputContainerAndButtonDisplay();
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
