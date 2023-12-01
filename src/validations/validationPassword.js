import { patternPassword } from "../constants";
import * as yup from "yup";
// export const validationOnChangePassword = (target, set) => {
// 	let newError = null;
// 	if (!patternPassword.test(target.value)) {
// 		newError = "Пароль может содержать буквы, цифры и символы _@#$%^&";
// 	} else if (target.value.length > 20) {
// 		newError = "Должно быть не больше 20 символов";
// 	}
// 	if (target.value === "") {
// 		set(null);
// 	}
// 	set(newError);
// };

// export const validationOnBlurPassword = (target, set) => {
// 	let newError = null;
// 	if (target.value.length < 6 && target.value !== "") {
// 		newError = "Должно быть не менее 6 символов ";
// 	}
// 	set(newError);
// };

import { validateAndGetErrorMessage } from "./validateAndGetErrorMassage";

const passwordChangeSchema = yup
	.string()
	.matches(
		patternPassword,
		"Пароль может содержать буквы, цифры и символы _@#$%^&",
	)
	.max(8, "Должно быть не больше 8 символов");

const passwordBlurSchema = yup
	.string()
	.min(6, "Должно быть не менее 6 символов");

export const validationOnChangePassword = (target, set) => {
	const newError = validateAndGetErrorMessage(
		passwordChangeSchema,
		target.value,
	);
	set(newError);
};

export const validationOnBlurPassword = (target, set) => {
	const newError = validateAndGetErrorMessage(passwordBlurSchema, target.value);
	set(newError);
};
