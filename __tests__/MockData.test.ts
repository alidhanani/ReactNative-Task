/* eslint-disable no-undef */
import { MockData } from '../src/model';

describe('Check on the MockData', () => {
  beforeEach(() => {
    MockData.getInstance().setTasks({
      ID: 0,
      Title: 'Test0',
      Description: 'Test0',
      Checked: false,
      Time: '01/02/2020',
    });
    MockData.getInstance().setTasks({
      ID: 1,
      Title: 'Test1',
      Description: 'Test1',
      Checked: false,
      Time: '01/02/2020',
    });
  });

  it('Is it fetching', () => {
    const values = MockData.getInstance().getTasks();
    expect(values.length).toBeGreaterThan(0);
  });

  it('Is it adding data', () => {
    MockData.getInstance().setTasks({
      ID: 2,
      Title: 'Test',
      Description: 'Test',
      Checked: false,
      Time: '01/02/2020',
    });
    const values = MockData.getInstance().getTasks();
    expect(values.findIndex((value) => value.ID === 2)).not.toEqual(-1);
  });

  it('Is updating data', () => {
    MockData.getInstance().updateTask(0, {
      ID: 0,
      Title: 'Test',
      Description: 'Test',
      Checked: false,
      Time: '01/02/2020',
    });
    const values = MockData.getInstance().getTasks();
    expect(values.find((value) => value.ID === 0)?.Title).toEqual('Test');
  });

  it('Is deleting data', () => {
    MockData.getInstance().deleteTask(0);
    const values = MockData.getInstance().getTasks();

    expect(values.findIndex((value) => value.ID === 0)).toEqual(-1);
  });

  it('changing title', () => {
    MockData.getInstance().updateTaskTitle(0, 'New Title');
    expect(MockData.getInstance().getTask(0)?.Title).toEqual('New Title');
  });

  it('change description', () => {
    MockData.getInstance().updateTaskDescription(0, 'New Title');
    expect(MockData.getInstance().getTask(0)?.Description).toEqual('New Title');
  });

  it('change date', () => {
    MockData.getInstance().updateTaskDate(0, 'New Title');

    expect(MockData.getInstance().getTask(0)?.Time).toEqual('New Title');
  });

  it('change checked', () => {
    MockData.getInstance().updateTaskCheck(0, true);

    expect(MockData.getInstance().getTask(0)?.Checked).toEqual(true);
  });
});
