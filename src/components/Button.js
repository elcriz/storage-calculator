import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Button = ({
    className,
    children,
    onClick,
    type,
    variant,
    ...rest
}) => (
    <button
        {...rest}
        className={classnames(className, 'button')}
        onClick={onClick}
        type={type}
        data-variant={variant}
    >
        {children}
    </button>
);

Button.defaultProps = {
    type: 'button',
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([
        'button',
        'submit',
    ]),
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
    ]),
};

export default Button;
