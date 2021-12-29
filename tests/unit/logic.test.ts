import { getTodoList } from '../../src/logic/getTodoList';
import { Todo } from '../../src/interface/todo';

const testTodoList: Array<Todo> = [
    {
        name: 'todo1',
        description: 'this is test todo',
        isDone: false,
    },
];
test('getTodoList', () => {
    expect(getTodoList()).toStrictEqual(testTodoList);
});
