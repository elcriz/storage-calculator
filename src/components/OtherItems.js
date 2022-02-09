import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './Button';

export const OtherItems = ({
	className,
	otherItems,
	onRemoveOtherItem,
	onDuplicateOtherItem,
}) => {
	return (
		<div
			className={classnames(className, 'other-items')}
		>
			{otherItems.map(({ id, label, width, length, height }) => (
				<div
					key={id}
					className="other-items__item"
				>
					<header className="other-items__header">
						<h3 className="other-items__label">
							{label}
						</h3>
						<div className="other-items__dimensions">
							({width}cm x {length}cm x {height}cm)
						</div>
					</header>
					<div className="other-items__buttons">
						<Button
							className="other-items__button"
							variant="secondary"
							onClick={() => {
								onRemoveOtherItem(id);
							}}
						>
							Remove
						</Button>
						<Button
							className="other-items__button"
							variant="secondary"
							onClick={() => {
								onDuplicateOtherItem(id);
							}}
						>
							Duplicate
						</Button>
					</div>
				</div>
			))}
		</div>
	);
};

OtherItems.propTypes = {
	className: PropTypes.string,
	otherItems: PropTypes.array.isRequired,
	onRemoveOtherItem: PropTypes.func.isRequired,
	onDuplicateOtherItem: PropTypes.func.isRequired,
};

export default OtherItems;
