import React from 'react';

export const Modal = ({ modalContent: { text, color } }) => {
	return (
		<p className='modal' style={{ backgroundColor: color }}>
			{text}
		</p>
	);
};

//delete item red rgb(202, 133, 133)
//edit item green rgb(73, 219, 139)
