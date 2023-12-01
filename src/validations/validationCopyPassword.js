export const validationBlurCopyPassword = (target, password, set) => {
	let newError = null;

	if (target.value !== password && target.value !== "") {
		newError = "Пароли должны совпадать";
	}
	set(newError);
};

export const validationOnChangeCopyPassword = (target, set) => {
	if (target.value !== "") {
		set(null);
	}
};
