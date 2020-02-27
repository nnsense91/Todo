<template lang="pug">
	.todo-item(:class="{checked: todo.checked}")
		label.label
			.input-block
				input(
					type="checkbox"
					@change="checkTodoAsCompleted"
					:checked="todo.checked"
				).input
			.title {{todo.name}}
		.button
			router-link(
				tag="button"
				:to="`/view/${todo.name}`"
			).view details
			button(
				type="button"
				@click="removeExistedTodo"
			).remove x
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	props: {
		todo: Object
	},
	methods: {
		...mapMutations(['removeTodo', 'checkTodo']),
		removeExistedTodo() {
			this.removeTodo(this.todo.id);
		},
		checkTodoAsCompleted(e) {
			const todoItem = {
				...this.todo,
				checked: e.target.checked
			}
			this.checkTodo(todoItem);
		}
	}
}
</script>

<style lang="scss" scoped>

.todo-item {
		display: flex;
		align-items: center;
		
		&:hover {

			.remove {
				visibility: visible;
			}

			.view {
				visibility: visible;
			}

		}
	}

	.checked .title {
		text-decoration: line-through;
	}

	.label {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.input-block {
		width: 60px;
		display: flex;
	}

	.title {
		padding: 15px 0;
		line-height: 1.2;
	}

	.button {
		display: flex;
	}

	.remove {
		background: transparent;
		border: none;
		color: firebrick;
		cursor: pointer;
		font-size: 20px;
		visibility: hidden;
		border: 1px solid transparent;
		border-radius: 4px;

		&:hover {
			border: 1px solid grey;
		}
		transition: border 0.4s;
	}

	.view {
		visibility: hidden;
		border: 1px solid transparent;
		border-radius: 4px;
		background: transparent;
		font-weight: 500;
		cursor: pointer;
		white-space: nowrap;
		margin-right: 20px;

		&:hover {
			border: 1px solid grey;
		}
		transition: border 0.4s;
	}
</style>