import PropTypes from 'prop-types';
import Control from './Control';

export const Controls = ({
    stackTypes,
    amounts,
    onClick,
}) => (
    <form className="controls">
        {Object.keys(stackTypes).map((stackType, index) => (
            <Control
                key={index}
                className="controls__control"
                label={stackTypes[stackType].label}
                currentAmount={amounts[stackType]}
                onClick={(isRaise) => {
                    onClick(stackType, isRaise)
                }}
            />
        ))}
    </form>
);

Controls.propTypes = {
    stackTypes: PropTypes.object.isRequired,
    amounts: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Controls;
