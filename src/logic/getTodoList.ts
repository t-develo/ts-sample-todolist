import { Todo } from '../interface/todo';

/**
 * Todoの配列を取得
 * @returns {Array<Todo>} Todoの配列
 */
export function getTodoList(): Array<Todo> {
    return [
        {
            id: '920d6886-385c-42cd-9856-770b5b6c67e5',
            name: 'todo1',
            description: 'this is test todo',
            isDone: false,
        },
        {
            id: 'c3a98773-5110-4b89-b4d5-30ad40d3a313',
            name: 'todo2',
            description: 'this is test todo',
            isDone: true,
        },
        {
            id: 'b492a97b-efce-4ee2-a7b8-58493a0320c3',
            name: 'todo3',
            description: 'this is test todo',
            isDone: false,
        },
    ];
}
