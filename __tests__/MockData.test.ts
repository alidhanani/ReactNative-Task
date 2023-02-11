/* eslint-disable no-undef */
import { MockData } from '../src/model';

describe('Check on the MockData', () => {
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
});
