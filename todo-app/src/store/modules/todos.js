const todos = {
	state: {
		todos: [],
		filter: 'all'
	},
	mutations: {
		addTodo(state, todo) {
			state.todos.push(todo);
		},
		removeTodo(state, todoId) {
			state.todos = state.todos.filter(item => {
				return item.id !== todoId;
			})
		},
		checkTodo(state, todoItem) {
			state.todos = state.todos.map(item => (item.id === todoItem.id ? todoItem : item));
		},
		filterTodos(state, filter) {			
			state.filter = filter;
		}
	},
	actions: {},
	getters: {}
}

export default todos;