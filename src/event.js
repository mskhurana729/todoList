export const events = (() => {
  const newListButton = document.querySelector(".newListButton");
  const newListInputContainer = document.querySelector(
    ".newListInputContainer"
  );

  const newListButtonEvent = (function () {
    newListButton.addEventListener("click", (e) => {
      newListInputContainer.style.display = "block";
      newListButton.style.display = "none";
    });
  })();
})();
