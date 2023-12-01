export const validationBlurCopyPassword = (target, password, set) => {
	if (target.value !== "") {
		set(null);
	}
};

export const validationOnChangeCopyPassword = (
	target,
	password,
	set,
	submitButtonRef,
) => {
	if (target.value !== "") {
		set(null);
	}
	let newError = null;
	if (target.value !== password && target.value !== "") {
		newError = "Пароли должны совпадать";
	}
	set(newError);

	if (target.value === password) {
		submitButtonRef.current.focus();
	}
};
