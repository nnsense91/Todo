<template lang="pug">
	.todo-list
		.content
			ul.list
				li.item(v-for="todo in todos")
					todoListItem(
						:todo="todo"
					)
		.footer
			.footer-content
				.counter {{todos.length}} items left
				.filter
					todoListFilter
				button(
					@click="clearAllTasks"
				).clear clear all
</template>

<script>
import todoListFilter from './todoListFilter';
import todoListItem from './todoListItem';
import { mapMutations } from 'vuex';

export default {
	props:{
		todos: Array
	},
	components: {
		todoListFilter,
		todoListItem
	},
	methods: {
	...mapMutations(['clearTasks']),
		clearAllTasks() {
			this.clearTasks();
		},
	}
}
</script>

<style lang="scss" scoped>
	.list {
		font-size: 24px;
		border-bottom: 1px solid #ededed;
	}

	.item {
		border-bottom: 1px solid #ededed;

		&:last-child {
			border-bottom: none;
		}
	}
	
	.footer {
		color: #777777;
		padding: 10px 15px;
		text-align: center;
		position: relative;
		font-size: 14px;

		&:before {
			content: '';
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			height: 50px;
			overflow: hidden;
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0px -3px rgba(0, 0, 0, 0.01);
		}
	}

	.footer-content {
		display: flex;
		align-items: center;
		position: relative;
	}

	.filter {
		flex: 1;
	}

	.clear {
		border: 1px solid transparent;
		border-radius: 4px;
		background: transparent;
		font-weight: 600;
		cursor: pointer;

		&:hover {
			font-weight: 600;
			background: #f55;
			color: #fff;
		}

		transition: 0.3s;
	}

</style>