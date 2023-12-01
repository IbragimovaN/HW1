import { patternEmail } from "../constants";

export const validationOnChengeEmail = (target, set) => {
	if (target.value === "") {
		set(null);
	}
	if (patternEmail.test(target.value)) {
		set(null);
	}
};

export const validationOnBlurEmail = (target, set) => {
	let newError = null;
	if (!patternEmail.test(target.value) && target.value !== "") {
		newError = "Неверный формат email";
	} else if (target.value.length < 5 && target.value !== "") {
		newError = "Email не может содержать менее 5 символов";
	}
	if (target.value === "") {
		set(null);
	}
	set(newError);
};
