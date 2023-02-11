import { Task, tasks } from './Task';

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
    const index = tasks.findIndex((value) => value.ID === id);
    tasks.slice(index, 1);
  }

  updateTask(id: number, task: Task) {
    const index = tasks.findIndex((value) => value.ID === id);
    tasks[index] = task;
  }
}

export { Task, MockData };
