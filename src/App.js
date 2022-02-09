import { useState } from 'react';
import Header from './components/Header';
import Totals from './components/Totals';
import Controls from './components/Controls';
import AddOtherItem from './components/AddOtherItem';
import useAmounts from './hooks/useAmounts';
import useOtherItems from './hooks/useOtherItems';

const App = () => {
	const [isAddVisible, setIsAddVisible] = useState(false);
	const { amounts, setAmounts, stackTypes, onResetAmounts } = useAmounts();
	const { otherItems, addOtherItem, duplicateOtherItem, removeOtherItem, onResetOtherItems } = useOtherItems();

	const handleClick = (boxType, isRaise = true) => {
		setAmounts(currentAmounts => ({
			...currentAmounts,
			[boxType]: isRaise
				? currentAmounts[boxType] + 1
				: (amount => (amount - 1 < 0 ? 0 : amount - 1))
					(currentAmounts[boxType]),
		}));
	};

	const handleReset = () => {
		onResetAmounts();
		onResetOtherItems();
	};

	return (
		<div className="app">
			<Header
				onAddClick={() => {
					setIsAddVisible(true);
				}}
				onReset={handleReset}
			/>
			<Totals
				stackTypes={stackTypes}
				amounts={amounts}
				otherItems={otherItems}
				onRemoveOtherItem={removeOtherItem}
				onDuplicateOtherItem={duplicateOtherItem}
			/>
			<Controls
				stackTypes={stackTypes}
				amounts={amounts}
				onClick={handleClick}
			/>
			{isAddVisible && (
				<AddOtherItem
					onAdd={(otherItem) => {
						addOtherItem(otherItem);
						setIsAddVisible(false);
					}}
					onCancel={() => {
						setIsAddVisible(false);
					}}
				/>
			)}
		</div>
	);
};

export default App;
