const initialState = {
	todos: [],
};

const reducer = (state = initialState, actions) => {
	switch (actions.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: actions.payload.id,
						content: actions.payload.content,
						marked: false,
					},
				],
			};
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== actions.payload.id),
			};
		case 'MARK_TODO':
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === actions.payload.id ? { ...todo, marked: true } : { ...todo }
				),
			};
		default:
			return state;
	}
};

export default reducer;
