import React from 'react';

export const List = ({ data: { text, id }, handleDelete, handleEdit }) => {
	return (
		<>
			<div className='list-container'>
				<div>{text}</div>
				<div>
					<span>
						<img
							src='https://img.icons8.com/fluent-systems-regular/24/000000/edit.png'
							alt='edit'
							onClick={() => handleEdit(id)}
						/>
					</span>
					<span>
						<img
							src='https://img.icons8.com/material-rounded/24/000000/delete-sign.png'
							alt='delete'
							onClick={() => handleDelete(id)}
						/>
					</span>
				</div>
			</div>
		</>
	);
};
