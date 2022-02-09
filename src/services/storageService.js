export const getFromStorage = (key, defaultValue) => {
	return (value => value
		? JSON.parse(value)
		: defaultValue
	)(window.localStorage.getItem(key));
};

export const saveToStorage = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value));
};
