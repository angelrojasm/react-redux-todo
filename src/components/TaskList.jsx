import Task from './Task';
import '../css/TaskList.css';
import { useSelector } from 'react-redux';

const TaskList = () => {
	const tasks = useSelector(state => state.todos);

	function generateTaskList() {
		return tasks.map(todo => {
			return tasks.length === 0 ? <></> : <Task key={todo.id} todoInfo={todo} />;
		});
	}
	return <div id='list'>{generateTaskList()}</div>;
};
export default TaskList;
