import { useDispatch } from 'react-redux';
import { markTodo, removeTodo } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Task.css';

const Task = ({ todoInfo }) => {
	const { id, content, marked } = todoInfo;
	const dispatch = useDispatch();
	return (
		<div id='list-entry'>
			<p className={marked ? 'entry-text checked' : 'entry-text'}>{content}</p>
			<div className='icons'>
				<FontAwesomeIcon
					id='check-icon'
					icon={faCheck}
					onClick={e => {
						dispatch(markTodo(id));
					}}
				/>
				<FontAwesomeIcon
					id='trash-icon'
					icon={faTrash}
					onClick={e => {
						e.preventDefault();
						dispatch(removeTodo(id));
					}}
				/>
			</div>
		</div>
	);
};
export default Task;
