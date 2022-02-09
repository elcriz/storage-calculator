import { useEffect, useState } from 'react';
import { getFromStorage, saveToStorage } from '../services/storageService';
import stackTypes from '../stack-types.json';

const defaultState = Object.keys(stackTypes)
    .reduce((previous, current) => ({
        ...previous,
        [current]: 0,
    }), {});

export const useAmounts = () => {
    const [amounts, setAmounts] = useState(
		getFromStorage('storageCalculator', defaultState)
    );

    useEffect(() => {
		saveToStorage('storageCalculator', amounts);
    }, [amounts]);

    return {
        amounts,
        setAmounts,
        stackTypes,
        onReset: () => setAmounts(defaultState),
    };
};

export default useAmounts;
