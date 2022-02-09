import { useEffect, useState } from "react";
import OtherItemModel from "../models/OtherItemModel";
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

		/**
		 * Add new item.
		 * @param {OtherItemModel} newOtherItem
		 * @return {void}
		 */
		addOtherItem: (newOtherItem) => {
			setOtherItems(existing => ([
				...existing,
				newOtherItem,
			]));
		},

		/**
		 * Duplicate existing item by its id.
		 * @param {string} id
		 * @return {void}
		 */
		duplicateOtherItem: (id) => {
			setOtherItems(existing => ([
				...existing,
				new OtherItemModel({
					...existing.find(item => item.id === id),
					id: undefined,
				}),
			]));
		},

		/**
		 * Remove existing item by its id.
		 * @param {string} id
		 * @return {void}
		 */
		removeOtherItem: (id) => {
			if (window.confirm('Are you sure you want to remove this item?')) {
				setOtherItems(existing => existing
					.filter(otherItem => otherItem.id !== id)
				);
			}
		},

		/**
		 * Reset state.
		 * @return {void}
		 */
		onResetOtherItems: () => {
			setOtherItems(defaultState);
		},
	};
};

export default useOtherItems;
