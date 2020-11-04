export const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'SUBMIT_INPUT': {
			const newArr = [...state.list];
			newArr.push({ id: newArr.length + 1, text: payload });
			return {
				...state,
				list: [...newArr],
				modalContent: { text: 'Item added', color: 'rgb(73, 219, 139)' },
				showModal: true,
				idToEdit: null,
				toEdit: false,
			};
		}
		case 'CLOSE_MODAL': {
			return {
				...state,
				showModal: false,
				modalContent: {},
			};
		}
		case 'DELETE_ITEM': {
			let newArr = [...state.list];
			newArr = newArr.filter((item) => item.id !== payload);
			return {
				...state,
				list: newArr,
				modalContent: { text: 'Item deleted', color: 'rgb(202, 133, 133)' },
				showModal: true,
			};
		}
		case 'CLEAR_ITEMS': {
			return {
				...state,
				list: [],
				modalContent: { text: 'List Cleared', color: 'rgb(202, 133, 133)' },
				showModal: true,
			};
		}
		case 'EDIT_ITEM': {
			const newArr = [...state.list];
			const index = newArr.findIndex((item) => item.id === payload) + 1;
			return {
				...state,
				toEdit: true,
				idToEdit: index,
			};
		}
		case 'FALSE_EDIT': {
			return { ...state, toEdit: false };
		}

		case 'REPLACE_ITEM': {
			const newArr = [...state.list];
			newArr[state.idToEdit - 1] = { id: state.idToEdit, text: payload };
			return {
				...state,
				list: newArr,
				idToEdit: null,
				showModal: true,
				modalContent: { text: 'Value changed', color: 'rgb(202, 133, 133)' },
			};
		}
		case 'EMPTY_VALUE':
			return {
				...state,
				showModal: true,
				modalContent: {
					text: 'Please Enter a value',
					color: 'rgb(202, 133, 133)',
				},
			};

		default:
			throw new Error('No matching case');
	}
};
