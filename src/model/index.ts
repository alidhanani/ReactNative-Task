import { Task } from './Task';

let tasks: Task[] = [];

class MockData {
  private static instance: MockData;

  public static getInstance(): MockData {
    if (!MockData.instance) {
      MockData.instance = new MockData();
    }

    return MockData.instance;
  }

  getTasks(): Task[] {
    return tasks;
  }

  getTask(id: number): Task | null {
    const value = tasks.find((value) => value.ID === id);

    return value ? value : null;
  }

  titleExists(title: string): boolean {
    const value = tasks.find((value) => value.Title === title);
    return value ? true : false;
  }

  setTasks(task: Task) {
    tasks.push(task);
  }

  deleteTask(id: number) {
    tasks = tasks.filter((item) => item.ID !== id);
  }

  updateTask(id: number, task: Task) {
    const index = tasks.findIndex((value) => value.ID === id);
    tasks[index] = task;
  }

  updateTaskTitle(id: number, title: string) {
    const index = tasks.findIndex((value) => value.ID === id);
    tasks[index].Title = title;
  }

  updateTaskDescription(id: number, description: string) {
    const index = tasks.findIndex((value) => value.ID === id);
    tasks[index].Description = description;
  }

  updateTaskDate(id: number, date: string) {
    const index = tasks.findIndex((value) => value.ID === id);
    tasks[index].Time = date;
  }

  updateTaskCheck(id: number, checked: boolean) {
    const index = tasks.findIndex((value) => value.ID === id);
    tasks[index].Checked = checked;
  }
}

export { Task, MockData };
