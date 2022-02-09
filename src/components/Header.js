import PropTypes from 'prop-types';
import Button from './Button';

export const Header = ({
	onAddClick,
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
                Storage Calculator
            </h1>
			<div className="header__buttons">
				<Button
					className="header__button header__button--add"
					variant="primary"
					onClick={onAddClick}
				>
					Add item
				</Button>
				<Button
					className="header__button header__button--reset"
					variant="secondary"
					onClick={handleResetClick}
				>
					Reset
				</Button>
			</div>
        </header>
    );
};

Header.propTypes = {
	onAddClick: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default Header;
