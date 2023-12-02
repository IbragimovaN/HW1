import React from "react";
import { FormLayout } from "./Form-layout";
import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";

const onSubmitForm = (data) => {
	console.log(data);
};

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		getValues,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			copyPassword: "",
		},
	});

	const emailProps = {
		minLength: {
			value: 5,
			message: "Email не может содержать менее 5 символов",
		},
		maxLength: { value: 30, message: "Должно быть не больше 30 символов" },
		pattern: {
			value: /^[^ ]+@[^ ]+.[a-z]{2,3}$/,
			message: "Неверный формат email",
		},
	};

	const passwordProps = {
		minLength: {
			value: 6,
			message: "Пароль должен сорержать не менее 6 символов",
		},
		maxLength: {
			value: 8,
			message: "Пароль должен сорержать не более 8 символов",
		},
		pattern: {
			value: /^[\w_@#$%^&]*$/,
			message: "Пароль может содержать буквы, цифры и символы _@#$%^&",
		},
	};

	const copyPasswordProps = {
		minLength: {
			value: 6,
			message: "Повторите пароль, пожалуйста",
		},
		validate: (value) =>
			value === getValues("password") || "Пароли не совпадают",
	};

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const copyPasswordError = errors.copyPassword?.message;

	const { onChange } = register("copyPassword");
	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (isDirty && !emailError && !passwordError && !copyPasswordError) {
			submitButtonRef.current.focus();
		}
	}, [isDirty, emailError, passwordError, copyPasswordError]);

	return (
		<FormLayout
			onSubmitForm={onSubmitForm}
			register={register}
			handleSubmit={handleSubmit}
			emailError={emailError}
			emailProps={emailProps}
			passwordError={passwordError}
			passwordProps={passwordProps}
			copyPasswordProps={copyPasswordProps}
			copyPasswordError={copyPasswordError}
			submitButtonRef={submitButtonRef}
			onChange={onChange}
		/>
	);
};
