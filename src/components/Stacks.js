import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Stacks = ({
    className,
    stackTypes,
    stackAmounts,
    amounts,
}) => {
    const stacks = Object.keys(stackTypes)
        .reduce((previous, stackType) => {
            const { maxAmount } = stackTypes[stackType];
            return {
                ...previous,
                [stackType]: {
                    amount: stackAmounts[stackType],
                    itemsAmount: amounts[stackType],
                    graphical: Array.from({
                        length: stackAmounts[stackType]
                    }).reduce((previous) => {
                        const counted = previous.reduce((totalCount, currentCount) =>
                            currentCount + totalCount, 0);
                        return [
                            ...previous,
                            (amounts[stackType] - counted) > maxAmount
                                ? maxAmount : (amounts[stackType] - counted)
                        ];
                    }, [])
                }
            }
        }, {});

    return (
        <div
            className={classnames(className, 'stacks')}
        >
            {Object.keys(stacks).map((stackType, stackIndex) => {
                if (stacks[stackType].amount === 0) {
                    return null;
                }
                return (
                    <div
                        key={stackIndex}
                        className="stacks__type"
                    >
                        <h3 className="stacks__heading">
                            {stackTypes[stackType].label} <span>({stacks[stackType].itemsAmount})</span>
                        </h3>
                        <div className="stacks__graphical">
                            {stacks[stackType].graphical.map((boxesAmount, graphIndex) => (
                                <div
                                    key={graphIndex}
                                    className="stack"
                                >
                                    {Array.from({ length: boxesAmount }).map((_, boxIndex) => (
                                        <div
                                            key={boxIndex}
                                            className={classnames('stack__item', {
                                                'stack__item--box': stackType === 'largeBoxes' || stackType === 'smallBoxes',
                                                'stack__item--large-box': stackType === 'largeBoxes',
                                                'stack__item--small-box': stackType === 'smallBoxes',
                                                'stack__item--crate': stackType === 'crates',
                                            })}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

Stacks.propTypes = {
    className: PropTypes.string,
    stackTypes: PropTypes.object.isRequired,
    stackAmounts: PropTypes.object.isRequired,
    amounts: PropTypes.object.isRequired,
};

export default Stacks;
