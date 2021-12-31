import { toggleBoolean } from '../../../src/logic/toggleBoolean';

test('toggleTodoLStatus', () => {
    expect(toggleBoolean(true)).toBe(false);
});

test('toggleTodoLStatus', () => {
    expect(toggleBoolean(false)).toBe(true);
});
