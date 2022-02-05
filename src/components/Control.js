import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';

export const Control = ({
    className,
    label,
    currentAmount,
    onClick,
}) => (
    <div
        className={classnames(className, 'control')}
    >
        <h2 className="control__heading">
            {label}
        </h2>
        <div className="control__button-group">
            <Button
                className="control__button control__button--raise"
                title="Raise the amount"
                variant="primary"
                onClick={() => {
                    onClick(true);
                }}
            >
                +
            </Button>
            <div className="control__display">
                {currentAmount}
            </div>
            <Button
                className="control__button control__button--lower"
                title="Lower the amount"
                variant="primary"
                disabled={currentAmount === 0}
                onClick={() => {
                    onClick(false);
                }}
            >
                -
            </Button>
        </div>
    </div>
);

Control.defaultProps = {
    currentAmount: 0,
};

Control.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    currentAmount: PropTypes.number,
    onClick: PropTypes.func.isRequired,
};

export default Control;
