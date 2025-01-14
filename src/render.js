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
}
