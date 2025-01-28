//so what we need is that when ever + task button is clicked,
//task form should be displayed and the task should be added to the selected project or default tasks list.
export class Task {
  constructor(tittle, description, dueDate, priority, taskNotes = "") {
    this.tittle = tittle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = taskNotes;
  }

  static createTask() {
    const tittle = document.querySelector("#taskTittle").value;
    const description = document.querySelector("#taskDescription").value;
    const dueDate = document.querySelector("#taskDueDate").value;
    const priority = document.querySelector("#taskPriority").value;
    const notes = document.querySelector("#taskNotes").value;

    return new Task(tittle, description, dueDate, priority, notes);
  }
}
