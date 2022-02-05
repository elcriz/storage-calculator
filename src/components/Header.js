import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({
    onReset,
}) => {
    const handleResetClick = () => {
        if (window.confirm('Are you sure you want to reset?')) {
            onReset();
        }
    };

    return (
        <header className="header">
            <h1 className="header__heading">
                Moving Box Storage Calculator
            </h1>
            <Button
                className="header__button"
                onClick={handleResetClick}
                variant="secondary"
            >
                Reset
            </Button>
        </header>
    );
};

Header.propTypes = {
    onReset: PropTypes.func.isRequired,
};

export default Header;
