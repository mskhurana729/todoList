//so what we need is that when ever + task button is clicked,
//task form should be displayed and the task should be added to the selected project or default tasks list.
class Task {
  constructor(tittle, description, dueDate, priority, taskNotes = "") {
    this.tittle = tittle;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskNotes = taskNotes;
  }
}
