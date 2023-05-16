export interface TaskArray {
  id: number;
  title: string;
  isDone: boolean;
}

export const TaskMock: TaskArray[] = [
  {
    id:1, 
    title: 'First Task',
    isDone: true,
  },
  {
    id: 2,
    title: 'Second Task',
    isDone: true,
  },
  {
    id: 3,
    title: 'Third Task',
    isDone: false,
  },
  {
    id: 4,
    title: 'Green',
    isDone: true,
  },
  {
    id: 5,
    title: 'Red',
    isDone: false,
  },
  {
    id: 6,
    title: 'blue',
    isDone: true,
  },
];
