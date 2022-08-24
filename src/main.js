import { Notify } from "notiflix/build/notiflix-notify-aio";
import "./css/styles.css";
import refs from "./refs";
import {
  addTaskToLocalStorage,
  createTask,
  getTaskFromLocalStorage,
  addToLocalStorage,
} from "./services";
import { renderTask } from "./markup";
import {
  addToDOM,
  getParentElement,
  filterTasks,
  rewriteLocalStorage,
} from "./helpers";

refs.form.addEventListener("submit", onAddTask);
refs.list.addEventListener("click", onTaskChange);

startTasks();

function onAddTask(e) {
  e.preventDefault();
  const inputVal = e.currentTarget.elements.message.value.trim();
  if (!inputVal) {
    Notify.info('Enter a task')
    return;
  }
  const data = createTask(inputVal);
  addTaskToLocalStorage(data);
  addToDOM(renderTask([data]), refs.list);
  refs.form.reset();
}

function startTasks() {
  const tasks = getTaskFromLocalStorage();
  if (!tasks) {
    return;
  }
  addToDOM(renderTask(JSON.parse(tasks)), refs.list);
}

function onTaskChange(e) {
  if (e.target.tagName === "BUTTON") {
    const { task, tasks, id } = getParentElement(
      getTaskFromLocalStorage,
      e.target
    );
    const newList = filterTasks(tasks, id);
    task.remove();
    addToLocalStorage(newList);
  }
  if (e.target.tagName === "P") {
    const { task, tasks, id } = getParentElement(
      getTaskFromLocalStorage,
      e.target
    );
    task.classList.toggle("checked");
    const newList = rewriteLocalStorage(tasks, id);
    addToLocalStorage(newList);
  }
}

