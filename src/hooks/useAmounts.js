import { useEffect, useState } from 'react';
import stackTypes from '../stack-types.json';

const defaultState = Object.keys(stackTypes)
    .reduce((previous, current) => ({
        ...previous,
        [current]: 0,
    }), {});

export const useAmounts = () => {
    const [amounts, setAmounts] = useState(
        (savedState => savedState
            ? JSON.parse(savedState)
            : defaultState
        )(window.localStorage.getItem('storageCalculator'))
    );

    useEffect(() => {
        window.localStorage.setItem('storageCalculator', JSON.stringify(amounts));
    }, [amounts]);

    return {
        amounts,
        setAmounts,
        stackTypes,
        onReset: () => setAmounts(defaultState),
    };
};

export default useAmounts;
