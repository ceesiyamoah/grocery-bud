import React from 'react';
import { Modal } from './Modal';
import { Header } from './Header';
import { List } from './List';

export const GroceryList = () => {
	return (
		<>
			<div className='container'>
				<Modal text='Hi' />
				<Header text='Grocery List' />
				<div className='input-container'>
					<input
						type='text'
						name='text'
						id='textInput'
						placeholder='e.g. fish'
					/>
					<button type='submit'>Submit</button>
				</div>
				<List />
				<button className='btn' type='submit'>
					Clear
				</button>
			</div>
		</>
	);
};
