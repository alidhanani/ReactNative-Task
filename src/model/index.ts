import { Task } from './Task';

let tasks: Task[] = [
  {
    ID: 0,
    Title: 'Title',
    Description: 'XXXXX',
    Checked: false,
    Time: '9/2/2019',
  },
  {
    ID: 1,
    Title: 'Title :D',
    Description: 'XXXXX',
    Checked: false,
    Time: '9/2/2019',
  },
];

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
}

export { Task, MockData };
