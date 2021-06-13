import * as actions from './actionTypes';
let id = 0;

export const addTodo = content => ({
	type: actions.ADD_TODO,
	payload: {
		content,
		id: ++id,
	},
});

export const removeTodo = id => ({
	type: actions.REMOVE_TODO,
	payload: { id },
});

export const markTodo = id => ({
	type: actions.MARK_TODO,
	payload: { id },
});
