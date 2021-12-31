<template>
    <div>
        <p>Todo一覧</p>
        <DataTable :value="todoList">
            <Column field="idDone" header="status">
                <template #body="slot">
                    <i
                        v-if="slot.data.isDone"
                        class="pi pi-check-circle"
                        @click="toggleTodoStatus(slot.data)"
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
                    <a :href="slot.data.id">
                        <i class="pi pi-pencil"></i>
                    </a>
                </template>
            </Column>
        </DataTable>

        <p>未完了Todo一覧</p>
        <DataTable :value="filteredTodoList">
            <Column field="idDone" header="status">
                <template #body="slot">
                    <i
                        v-if="slot.data.isDone"
                        class="pi pi-check-circle"
                        @click="toggleTodoStatus(slot.data)"
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
                    <a :href="slot.data.id">
                        <i class="pi pi-pencil"></i>
                    </a>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Todo } from '../interface/todo';
import { getFIlteredTodoList, getTodoList } from '../logic/getTodoList';
import { toggleBoolean } from '../logic/toggleBoolean';

export default defineComponent({
    setup() {
        // data
        const todoList: Array<Todo> = reactive(getTodoList());
        const filteredTodoList: Array<Todo> = reactive(getFIlteredTodoList());

        // method
        function toggleTodoStatus(todo: Todo): void {
            todo.isDone = toggleBoolean(todo.isDone);
        }

        return {
            todoList,
            toggleTodoStatus,
            filteredTodoList,
        };
    },
});
</script>
