import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

export const FormLayout = ({
	onSubmitForm,
	emailError,
	emailProps,
	register,
	handleSubmit,
	passwordError,
	passwordProps,
	copyPasswordError,
	copyPasswordProps,
	submitButtonRef,
	onChange,
}) => {
	return (
		<div className={styles.App}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
				{emailError && <div className={styles.formError}>{emailError}</div>}
				<input
					className={styles.formInput}
					type="email"
					placeholder="Email"
					name="email"
					{...register("email", emailProps)}
				/>
				{passwordError && (
					<div className={styles.formError}>{passwordError}</div>
				)}
				<input
					className={styles.formInput}
					type="password"
					placeholder="Пароль"
					name="password"
					{...register("password", passwordProps)}
				/>
				{copyPasswordError && (
					<div className={styles.formError}>{copyPasswordError}</div>
				)}
				<input
					className={styles.formInput}
					type="password"
					placeholder="Повторите пароль"
					name="copyPassword"
					{...register("copyPassword", copyPasswordProps)}
					onChange={onChange}
				/>

				<button
					className={`${styles.formInput} ${styles.formBtn}`}
					type="submit"
					ref={submitButtonRef}
					disabled={!!emailError}
				>
					отправить
				</button>
			</form>
		</div>
	);
};

FormLayout.propTypes = {
	onSubmitForm: PropTypes.func,
	emailError: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
	copyPassword: PropTypes.string,
	onChangeEmail: PropTypes.func,
	onBlurEmail: PropTypes.func,
	passwordError: PropTypes.string,
	onChangePassword: PropTypes.func,
	onBlurPassword: PropTypes.func,
	updateState: PropTypes.func,
	copyPasswordError: PropTypes.string,
	onBlurCopyPassword: PropTypes.func,
	setBtns: PropTypes.func,
	onChangeCopyPassword: PropTypes.func,
	submitButtonRef: PropTypes.object,
	ref: PropTypes.func,
	emailProps: PropTypes.object,
	passwordProps: PropTypes.object,
	copyPasswordProps: PropTypes.object,
	register: PropTypes.func,
	handleSubmit: PropTypes.func,
	passwordRef: PropTypes.object,
	onChange: PropTypes.func,
};
