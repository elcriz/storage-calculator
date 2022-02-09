import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OtherItemModel from '../models/OtherItemModel';
import Button from './Button';

export const AddOtherItem = ({
	onAdd,
	onCancel,
}) => {
	const [item, setItem] = useState(new OtherItemModel());
	const [isValid, setIsValid] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = ({ target }) => {
		setItem(existing => new OtherItemModel({
			...existing,
			[target.id]: target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitted(true);
		if (isValid) {
			const itemToAdd = new OtherItemModel(item);
			onAdd(itemToAdd);
		}
	};

	useEffect(() => {
		setIsValid(item.isValid());
	}, [item]);

	return (
		<form
			className="item-form"
			onSubmit={handleSubmit}
		>
			<div className="item-form__inner">
				<h1 className="item-form__heading">
					Add new item
				</h1>
				<div className="form-field">
					<label
						className="form-field__label"
						htmlFor="label"
					>
						Label
					</label>
					<input
						id="label"
						className="form-field__input"
						name="label"
						type="text"
						defaultValue={item.label}
						onChange={handleChange}
						autoFocus
					/>
				</div>
				<div className="form-field">
					<label
						className="form-field__label"
						htmlFor="width"
					>
						Width (cm)
					</label>
					<input
						id="width"
						className="form-field__input"
						name="width"
						type="number"
						defaultValue={item.width}
						onChange={handleChange}
					/>
				</div>
				<div className="form-field">
					<label
						className="form-field__label"
						htmlFor="length"
					>
						Length (cm)
					</label>
					<input
						id="length"
						className="form-field__input"
						name="length"
						type="number"
						defaultValue={item.length}
						onChange={handleChange}
					/>
				</div>
				<div className="form-field">
					<label
						className="form-field__label"
						htmlFor="height"
					>
						Height (cm)
					</label>
					<input
						id="height"
						className="form-field__input"
						name="height"
						type="number"
						defaultValue={item.height}
						onChange={handleChange}
					/>
				</div>
				{isSubmitted && !isValid && (
					<div className="item-form__error-message">
						All fields are required!
					</div>
				)}
				<div className="item-form__buttons">
					<Button
						className="item-form__button item-form__button--submit"
						variant="primary"
						type="submit"
						disabled={!isValid}
					>
						Add item
					</Button>
					<Button
						className="item-form__button item-form__button--cancel"
						variant="secondary"
						onClick={onCancel}
					>
						Cancel
					</Button>
				</div>
			</div>
		</form>
	);
};

AddOtherItem.propTypes = {
	onAdd: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
};

export default AddOtherItem;
