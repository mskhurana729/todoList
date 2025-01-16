import { Validate } from "./valid.js";
import { List } from "./lists.js";
import { Render } from "./render.js";
export const events = (() => {
  const newListButton = document.querySelector(".newListButton");

  const addListButton = document.querySelector(".addListButton");

  const removeListButtonEvent = function () {
    let removeButtons = document.querySelectorAll(".removeListButton");
    removeButtons.forEach((removeButton) => {
      removeButton.addEventListener("click", (e) => {
        let listToBeRemoved = removeButton.dataset.listname;
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
  return { removeListButtonEvent };
})();
