import React from 'react';
import PropTypes from 'prop-types';
import Stacks from './Stacks';

export const Totals = ({
    stackTypes,
    amounts,
}) => {
    const stackAmounts = Object.keys(stackTypes)
        .reduce((previous, stackType) => ({
            ...previous,
            [stackType]: Math.ceil(
                amounts[stackType] / stackTypes[stackType].maxAmount
            ),
        }), {});

    const stacksAmount = Object.keys(stackAmounts)
        .reduce((previous, stackType) => (
            previous + stackAmounts[stackType]
        ), 0);

    const itemsAmount = Object.keys(amounts)
        .reduce((previous, current) => {
            return previous + amounts[current];
        }, 0);

    const floorSpace = Object.keys(stackAmounts)
        .reduce((previous, stackType) => (
            previous + stackAmounts[stackType] * (
                stackTypes[stackType].width * stackTypes[stackType].length
            ) / 10000
        ), 0);

    const roomSpace = Object.keys(amounts)
        .reduce((previous, boxType) => {
            const squareCm = stackTypes[boxType].width * stackTypes[boxType].length
                * stackTypes[boxType].height;
            return previous + (amounts[boxType] * (squareCm / 1000000));
        }, 0);

    return (
        <div className="totals">
            {stacksAmount > 0 && (
                <div className="totals__stacks">
                    <h2 className="totals__heading">
                        Current stacks
                    </h2>
                    <Stacks
                        className="totals__stacks"
                        stackTypes={stackTypes}
                        stackAmounts={stackAmounts}
                        amounts={amounts}
                    />
                </div>
            )}
            <div className="totals__amounts">
                <h2 className="totals__heading">
                    Space required
                </h2>
                <dl>
                    <dt>Total number of items</dt>
                    <dd>
                        {itemsAmount} box{itemsAmount === 1 ? '' : 'es'}, {stacksAmount} stack{stacksAmount === 1 ? '' : 's'}
                    </dd>
                    {Object.keys(stackTypes).map((stackType, index) => (
                        <React.Fragment key={index}>
                            <dt>{stackTypes[stackType].label}</dt>
                            <dd>{amounts[stackType]}</dd>
                        </React.Fragment>
                    ))}
                    <dt>Floor space</dt>
                    <dd>
                        <strong>
                            {floorSpace.toFixed(2)} <abbr title="Square metres">m<sup>2</sup></abbr>
                        </strong>
                    </dd>
                    <dt>Room space</dt>
                    <dd>
                        <strong>
                            {roomSpace.toFixed(2)} <abbr title="Square metres">m<sup>3</sup></abbr>
                        </strong>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

Totals.propTypes = {
    stackTypes: PropTypes.object.isRequired,
    amounts: PropTypes.object.isRequired,
};

export default Totals;
