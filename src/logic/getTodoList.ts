import { Todo } from '../interface/todo';

export function getTodoList(): Array<Todo> {
    return [
        {
            name: 'todo1',
            description: 'this is test todo',
            isDone: false,
        },
    ];
}
