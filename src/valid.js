export class Validate {
  static validateNewListNameInput() {
    let listNameValidationArea = document.querySelector(
      ".listNameValidationArea"
    );
    listNameValidationArea.textContent = "Please Provide The List Name";
  }
}
