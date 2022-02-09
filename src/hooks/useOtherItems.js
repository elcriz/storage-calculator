import { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from '../services/storageService';

const defaultState = [];

export const useOtherItems = () => {
	const [otherItems, setOtherItems] = useState(
		getFromStorage('storageOtherItems', defaultState)
	);

	useEffect(() => {
		saveToStorage('storageOtherItems', otherItems)
	}, [otherItems]);

	return {
		otherItems,
		addOtherItem: (newOtherItem) => {
			setOtherItems(existing => ([
				...existing,
				newOtherItem,
			]));
		},
		removeOtherItem: (id) => {
			setOtherItems(existing => existing
				.filter(otherItem => otherItem.id !== id)
			);
		},
		onReset: () => setOtherItems(defaultState),
	};
};

export default useOtherItems;
