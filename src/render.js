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
}
