import React from "react";
import { FormLayout } from "./Form-layout";
import { useState, useRef } from "react";
import { onSubmitForm } from "./utills";
import { useStore } from "./utills";
import {
	validationOnChengeEmail,
	validationOnBlurEmail,
	validationOnChangePassword,
	validationOnBlurPassword,
	// validationBlurCopyPassword,
	validationOnChangeCopyPassword,
} from "./validations";


export const Form = () => {
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [copyPasswordError, setCopyPasswordError] = useState(null);
	const submitButtonRef = useRef(null);

	const onChangeEmail = (target) => {
		updateState("email", target.value);
		validationOnChengeEmail(target, setEmailError);
	};

	const onBlurEmail = (target) => {
		validationOnBlurEmail(target, setEmailError);

	};

	const onChangePassword = (target) => {
		updateState("password", target.value);
		validationOnChangePassword(target, setPasswordError);
	};

	const onBlurPassword = (target) => {
		validationOnBlurPassword(target, setPasswordError);
	};

	const onChangeCopyPassword = (target) => {
		updateState("copyPassword", target.value);
		validationOnChangeCopyPassword(target, password,setCopyPasswordError, submitButtonRef)

	};

	// const onBlurCopyPassword = (target) => {
	// 	validationBlurCopyPassword(target, password, setCopyPasswordError);
	// };
	const { getState, updateState } = useStore();
	const { email, password, copyPassword } = getState();


	return (
		<FormLayout
			onSubmitForm={onSubmitForm}
			emailError={emailError}
			email={email}
			password={password}
			copyPassword={copyPassword}
			onChangeEmail={onChangeEmail}
			onBlurEmail={onBlurEmail}
			passwordError={passwordError}
			onChangePassword={onChangePassword}
			onBlurPassword={onBlurPassword}
			updateState={updateState}
			copyPasswordError={copyPasswordError}
			// onBlurCopyPassword={onBlurCopyPassword}
			onChangeCopyPassword={onChangeCopyPassword}
			submitButtonRef={submitButtonRef}
		/>
	);
};
