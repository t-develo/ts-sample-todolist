<template>
    <div>
        <ul>
            <li v-for="(todo, index) in todoList" :key="index">
                <p>{{ todo.name }}</p>
                <p>{{ todo.description }}</p>
            </li>
        </ul>
    </div>
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
