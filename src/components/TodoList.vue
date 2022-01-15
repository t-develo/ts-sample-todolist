<template>
    <div>
        <p>Todo一覧</p>
        <Button
            @click="
                todoList = setFilteredTodoList();
                $forceUpdate();
            "
            label="未完了のTodoのみ表示する"
            class="p-button-outlined p-button-secondary"
        />
        <Button
            @click="
                todoList = setTodoList();
                $forceUpdate();
            "
            label="すべてのTodoを表示する"
            class="p-button-outlined p-button-secondary"
        />
        <DataTable :value="todoList">
            <Column field="idDone" header="status">
                <template #body="slot">
                    <i
                        v-if="slot.data.isDone"
                        class="pi pi-check-circle"
                        @click="slot.data.isDone = !slot.data.isDone"
                    ></i>
                    <i
                        v-else
                        class="pi pi-circle"
                        @click="toggleTodoStatus(slot.data)"
                    ></i>
                </template>
            </Column>
            <Column field="name" header="name">
                <template #body="slot">
                    <span v-if="slot.data.isDone">
                        <s>{{ slot.data.name }}</s>
                    </span>
                    <span v-else>{{ slot.data.name }}</span>
                </template>
            </Column>
            <Column field="description" header="description">
                <template #body="slot">
                    <span v-if="slot.data.isDone">
                        <s>{{ slot.data.description }}</s>
                    </span>
                    <span v-else>{{ slot.data.description }}</span>
                </template>
            </Column>
            <Column field="id" header="edit">
                <template #body="slot">
                    <Button
                        label="Edit"
                        @click="
                            openDialog();
                            editedTodo = editTodo(slot.data.id);
                        "
                        class="p-button-outlined p-button-secondary"
                    />
                </template>
            </Column>
        </DataTable>

        <Dialog header="header" v-model:visible="display">
            <div>
                <input v-model="editedTodo.name" />
            </div>
            <div>
                <input v-model="editedTodo.description" />
            </div>
            <Button
                @click="
                    updateTodo(editedTodo.id, editedTodo);
                    closeDialog();
                "
                label="Todoを更新する"
                class="p-button-outlined p-button-secondary"
            />
            <Button
                label="close"
                @click="closeDialog()"
                class="p-button-outlined p-button-secondary"
            />
        </Dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRaw } from 'vue';
import { Todo } from '../interface/todo';
import {
    getFilteredTodoList,
    getTodoById,
    getTodoList,
} from '../logic/getTodoList';
import { toggleBoolean } from '../logic/toggleBoolean';

export default defineComponent({
    setup() {
        // data
        let todoList: Array<Todo> = reactive(getTodoList());
        const filteredTodoList: Array<Todo> = reactive(getFilteredTodoList());
        const display = ref(false);
        let editedTodo: Todo = reactive({
            id: 'test',
            name: 'test',
            description: '',
            isDone: false,
        });

        // method
        function toggleTodoStatus(todo: Todo): void {
            todo.isDone = toggleBoolean(todo.isDone);
        }

        function openDialog(): void {
            display.value = true;
        }

        function closeDialog(): void {
            display.value = false;
        }

        function editTodo(id: string): Todo {
            return getTodoById(id);
        }

        function setFilteredTodoList(): Array<Todo> {
            return getFilteredTodoList();
        }

        function setTodoList(): Array<Todo> {
            return getTodoList();
        }

        function updateTodo(id: string, editedTodo: Todo): void {
            console.log(todoList);
            console.log(toRaw(todoList));
            const todo = getTodoById(id);
            todo.name = editedTodo.name;
            todo.description = editedTodo.description;
        }

        return {
            todoList,
            filteredTodoList,
            display,
            editedTodo,
            toggleTodoStatus,
            openDialog,
            closeDialog,
            editTodo,
            setFilteredTodoList,
            setTodoList,
            updateTodo,
        };
    },
});
</script>
