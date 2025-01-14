export class Render {
  static displayInvalidListNameError() {
    let listNameValidationArea = document.querySelector(
      ".listNameValidationArea"
    );
    listNameValidationArea.textContent = "Please Provide The List Name";
  }
}
