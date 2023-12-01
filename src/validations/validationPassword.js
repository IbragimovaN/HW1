import { patternPassword } from "../constants";

export const validationOnChangePassword = (target, set) => {
	let newError = null;
	if (!patternPassword.test(target.value)) {
		newError = "Пароль может содержать буквы, цифры и символы _@#$%^&";
	} else if (target.value.length > 20) {
		newError = "Должно быть не больше 20 символов";
	}
	if (target.value === "") {
		set(null);
	}
	set(newError);
};

export const validationOnBlurPassword = (target, set) => {
	let newError = null;
	if (target.value.length < 6 && target.value !== "") {
		newError = "Должно быть не менее 6 символов ";
	}
	set(newError);
};
