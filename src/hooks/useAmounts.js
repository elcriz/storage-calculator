import { useEffect, useState } from 'react';

const stackTypes = {
    largeBoxes: {
        label: 'Large boxes',
        maxAmount: 6,
        maxHeight: 200,
        width: 34,
        length: 49,
        height: 34,
    },
    smallBoxes: {
        label: 'Small boxes',
        maxAmount: 8,
        maxHeight: 200,
        width: 33,
        length: 49,
        height: 25,
    },
    crates: {
        label: 'Crates',
        maxAmount: 5,
        maxHeight: 190,
        width: 41,
        length: 78,
        height: 38,
    },
};

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
