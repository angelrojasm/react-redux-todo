import logo from './logo.svg';
import TaskList from './components/TaskList';
import './css/App.css';
import { addTodo } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
	const [inputMessage, setInputMessage] = useState('');
	const dispatch = useDispatch();
	return (
		<div id='app'>
			<div id='header'>
				<div id='header-content'>
					<h2>React Redux TODO</h2>
					<img id='logo' src={logo} alt='logo' />
				</div>
			</div>
			<div id='main'>
				<div className='title'>
					<h2>TODO APP</h2>
				</div>
				<div id='task-input-bar'>
					<div className='task-input'>
						<input
							type='text'
							name='task-input'
							id='task'
							placeholder='What do you plan to do?'
							value={inputMessage}
							onChange={e => {
								setInputMessage(e.target.value);
							}}
						/>
						<button
							onClick={() => {
								dispatch(addTodo(inputMessage));
							}}
							id='task-button'>
							ADD
						</button>
					</div>
				</div>
				<TaskList />
			</div>
		</div>
	);
}

export default App;
