import { Render } from "./render";
export class Validate {
  static validateNewListNameInput() {
    let newListName = document.querySelector("#newListName").value;
    document.querySelector("#newListName").value = "";
    if (!newListName) {
      Render.displayInvalidListNameError(true);
      return newListName;
    }
    Render.displayInvalidListNameError(false);

    return newListName;
  }

  static validateTaskInputs() {
    const tittle = document.querySelector("#taskTittle").value;
    const description = document.querySelector("#taskDescription").value;
    const dueDate = document.querySelector("#taskDueDate").value;
    let isValid = true;
    let taskTittleInputContainer = document.querySelector(
      ".taskTittleInputContainer"
    );

    const taskDescriptionInputContainer = document.querySelector(
      ".taskDescriptionInputContainer"
    );

    const taskDueDateInputContainer = document.querySelector(
      ".taskDueDateInputContainer"
    );

    if (!tittle) {
      Render.showError(taskTittleInputContainer);
      isValid = false;
    } else {
      Render.removeError(taskTittleInputContainer);
    }
    if (!description) {
      Render.showError(taskDescriptionInputContainer);
      isValid = false;
    } else {
      Render.removeError(taskDescriptionInputContainer);
    }
    if (!dueDate) {
      Render.showError(taskDueDateInputContainer);
      isValid = false;
    } else {
      Render.removeError(taskDueDateInputContainer);
    }
    return isValid;
  }
}
