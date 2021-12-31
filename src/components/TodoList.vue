<template>
    <DataTable :value="todoList">
        <Column field="name" header="name" />
        <Column field="description" header="description" />
        <Column field="id" header="edit">
            <template #body="slot">
                <a :href="slot.data.id">
                    <i class="pi pi-pencil"></i>
                </a>
            </template>
        </Column>
    </DataTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getTodoList } from '../logic/getTodoList';
import { Todo } from '../interface/todo';

export default defineComponent({
    setup() {
        const todoList: Array<Todo> = getTodoList();

        return {
            todoList,
        };
    },
});
</script>
