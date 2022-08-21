const TASKS = "list_of_tasks";

export function addTaskToLocalStorage(task) {
  const parsedLocalStorage = getTaskFromLocalStorage(TASKS);
  const tasks = parsedLocalStorage ? JSON.parse(parsedLocalStorage) : [];
  tasks.push(task);
  addToLocalStorage(tasks);
}

export function getTaskFromLocalStorage(key = TASKS) {
  return localStorage.getItem(key);
}

export function createTask(inputVal) {
  return { inputVal, isChecked: false, id: Date.now() };
}

export function addToLocalStorage(tasks) {
    localStorage.setItem(TASKS, JSON.stringify(tasks));
}