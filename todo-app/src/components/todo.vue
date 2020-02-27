<template lang="pug">
	.todo
		todoInput
		todoList(
			v-if="todos.length > 0"
			:todos="filteredTodos"
		)
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';
import { mapState } from 'vuex';

export default {
	data() {
		return {
			// todos: [],
			// filter: 'all'
		}
	},
	components: {
		todoInput,
		todoList
	},
	computed: {
		...mapState({
			todos: state => state.todos.todos,
			filter: state => state.todos.filter,
		}),
		filteredTodos() {
			switch(this.filter) {
				case 'all':
					return this.todos;
				case 'active':
					return this.todos.filter(item => item.checked === false);
				case 'completed':
					return this.todos.filter(item => item.checked);
			}
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