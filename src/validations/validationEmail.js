import { patternEmail } from "../constants";
import * as yup from "yup";
import { validateAndGetErrorMessage } from "./validateAndGetErrorMassage";

const emailChangeSchema = yup
	.string()
	.matches(patternEmail, "Неверный формат email")
	.max(30, "Должно быть не больше 30 символов");

const emailBlurSchema = yup
	.string()
	.matches(patternEmail, "Неверный формат email")
	.min(5, "Email не может содержать менее 5 символов");

export const validationOnChengeEmail = (target, set) => {
	const newError = validateAndGetErrorMessage(emailChangeSchema, target.value);
	set(newError);
};

export const validationOnBlurEmail = (target, set) => {
	const newError = validateAndGetErrorMessage(emailBlurSchema, target.value);
	set(newError);
};
