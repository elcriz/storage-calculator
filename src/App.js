import Header from './components/Header';
import Totals from './components/Totals';
import Controls from './components/Controls';
import useAmounts from './hooks/useAmounts';

const App = () => {
  const { amounts, setAmounts, stackTypes, onReset } = useAmounts();

  const handleClick = (boxType, isRaise = true) => {
    setAmounts(currentAmounts => ({
      ...currentAmounts,
      [boxType]: isRaise
        ? currentAmounts[boxType] + 1
        : (amount => (amount - 1 < 0 ? 0 : amount - 1))
          (currentAmounts[boxType]),
    }));
  };

  return (
    <div className="app">
      <Header
        onReset={onReset}
      />
      <Totals
        stackTypes={stackTypes}
        amounts={amounts}
      />
      <Controls
        stackTypes={stackTypes}
        amounts={amounts}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;