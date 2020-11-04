import React, { useReducer, useState } from 'react';
import { Modal } from './Modal';
import { Header } from './Header';
import { List } from './List';
import { reducer } from './reducer';

export const GroceryList = () => {
	const [state, dispatch] = useReducer(reducer, {
		list: [],
		showModal: false,
		modalContent: {},
		toEdit: false,
		idToEdit: null,
	});
	const [item, setItem] = useState('');

	const handleInput = () => {
		if (item) {
			dispatch({ type: 'SUBMIT_INPUT', payload: item });
			setItem('');
			setTimeout(() => dispatch({ type: 'CLOSE_MODAL' }), 5000);
		} else {
			dispatch({ type: 'EMPTY_VALUE' });
			setTimeout(() => dispatch({ type: 'CLOSE_MODAL' }), 5000);
		}
	};
	const handleDelete = (id) => {
		dispatch({ type: 'DELETE_ITEM', payload: id });
		setTimeout(() => dispatch({ type: 'CLOSE_MODAL' }), 5000);
	};
	const handleClear = () => {
		dispatch({ type: 'CLEAR_ITEMS' });
		setTimeout(() => dispatch({ type: 'CLOSE_MODAL' }), 5000);
	};
	const handleEdit = (id) => {
		setItem(state.list.find((arr) => arr.id === id).text);
		dispatch({ type: 'EDIT_ITEM', payload: id });
		setTimeout(() => dispatch({ type: 'CLOSE_MODAL' }), 5000);
	};
	const callEdit = () => {
		dispatch({ type: 'REPLACE_ITEM', payload: item });
		setTimeout(() => dispatch({ type: 'CLOSE_MODAL' }), 5000);
		setItem('');
		dispatch({ type: 'FALSE_EDIT' });
	};

	return (
		<>
			<div className='container'>
				{state.showModal && <Modal modalContent={state.modalContent} />}
				<Header text='Grocery List' />
				<div className='input-container'>
					<input
						type='text'
						name='text'
						id='textInput'
						placeholder='e.g. fish'
						value={item}
						onChange={(e) => setItem(e.target.value)}
					/>
					<button type='submit' onClick={state.toEdit ? callEdit : handleInput}>
						{state.toEdit ? 'Edit' : 'Submit'}
					</button>
				</div>
				{state.list.map((element) => (
					<List
						data={element}
						key={element.id}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				))}
				{state.list.length !== 0 && (
					<button className='btn' type='submit' onClick={handleClear}>
						Clear
					</button>
				)}
			</div>
		</>
	);
};
