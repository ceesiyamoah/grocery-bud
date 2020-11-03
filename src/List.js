import React from 'react';

export const List = () => {
	return (
		<>
			<div className='list-container'>
				<div>Item</div>
				<div>
					<span>
						<img
							src='https://img.icons8.com/fluent-systems-regular/24/000000/edit.png'
							alt='edit'
						/>
					</span>
					<span>
						<img
							src='https://img.icons8.com/material-rounded/24/000000/delete-sign.png'
							alt='delete'
						/>
					</span>
				</div>
			</div>
		</>
	);
};
