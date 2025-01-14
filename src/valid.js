import { Render } from "./render";
export class Validate {
  static validateNewListNameInput() {
    let newListName = document.querySelector("#newListName").value;
    if (!newListName) {
      Render.displayInvalidListNameError(true);
      return newListName;
    }
    Render.displayInvalidListNameError(false);

    return newListName;
  }
}
