import { Task, tasks } from './Task'

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
}
  

export {Task, MockData}