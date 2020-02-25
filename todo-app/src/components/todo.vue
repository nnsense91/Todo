<template lang="pug">
	.todo
		todoInput(
			@addTodo="addTodo"
		)
		todoList(
			v-if="todos.length > 0"
			:todos="todos"
			@removeTodo="removeTodo"
			@checkTodo="checkTodo"
			@filterTodos="filterTodos"
		)
		pre {{todos}}
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';

export default {
	data() {
		return {
			todos: [],
			filter: 'all'
		}
	},
	components: {
		todoInput,
		todoList
	},
	methods: {
		addTodo(todo) {
			this.todos.push(todo);
		},
		removeTodo(todoId) {
			this.todos = this.todos.filter(item => {
				return item.id !== todoId;
			})
		},
		checkTodo(todoItem) {
			this.todos = this.todos.map(item => (item.id === todoItem.id ? todoItem : item));
		},
		filterTodos(filter) {			
			this.filter = filter;
		}
	}
}
</script>

<style lang="scss" scoped>
	.todo {
		margin-top: 100px;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 25px 50px 0 rgba(0, 0, 0, 0.01);
	}
</style>