import { Validate } from "./valid.js";
import { List } from "./lists.js";
import { Render } from "./render.js";
export const events = (() => {
  const newListButton = document.querySelector(".newListButton");

  const addListButton = document.querySelector(".addListButton");
  //pseudocode
  //We want to create an event on whenever add list button is clicked
  //it will first validate weather the input is not empty, if it is empty then it will show the error
  //then when the user put the name correctly and clicks add list button it will erase the error
  //and also add the list to the lists array;
  //change the display property of newListButton and newListInputContainer
  // and will display the list name in the listRendering area

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
})();
