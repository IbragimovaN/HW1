export const validationBlurCopyPassword = (target, password, set) => {
	if (target.value !== "") {
		set(null);
	}
};

import * as yup from "yup";
import { validateAndGetErrorMessage } from "./validateAndGetErrorMassage";

export const validationOnChangeCopyPassword = (
	target,
	password,
	set,
	submitButtonRef,
) => {
	const passwordCopyChangeSchema = yup
		.string()
		.oneOf([yup.ref(password), null], "Пароли должны совпадать");

	const newError = validateAndGetErrorMessage(
		passwordCopyChangeSchema,
		target.value,
	);
	set(newError);

	if (target.value === password) {
		set(null);
		submitButtonRef.current.focus();
	}
};
