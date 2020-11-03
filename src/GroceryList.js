import React from 'react';
import { Modal } from './Modal';
import { Header } from './Header';

export const GroceryList = () => {
	return (
		<>
			<div className='container'>
				<Modal text='Hi' />
				<Header text='Grocery List' />
				<div className='input-container'>
					<input type='text' name='text' id='textInput' />
					<button type='submit'>Submit</button>
				</div>
				<div>List</div>
			</div>
		</>
	);
};
