import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

export const FormLayout = ({
	onSubmitForm,
	emailError,
	email,
	password,
	copyPassword,
	onChangeEmail,
	onBlurEmail,
	passwordError,
	onChangePassword,
	onBlurPassword,
	copyPasswordError,
	onBlurCopyPassword,
	onChangeCopyPassword,
	submitButtonRef,
}) => {
	return (
		<div className={styles.App}>
			<form
				className={styles.form}
				onSubmit={(event) =>
					onSubmitForm(event, { email, password, copyPassword })
				}
			>
				{emailError && <div className={styles.formError}>{emailError}</div>}
				<input
					className={styles.formInput}
					type="email"
					placeholder="Email"
					name="email"
					value={email}
					onChange={({ target }) => onChangeEmail(target)}
					onBlur={({ target }) => onBlurEmail(target)}
				/>
				{passwordError && (
					<div className={styles.formError}>{passwordError}</div>
				)}
				<input
					className={styles.formInput}
					type="password"
					placeholder="Пароль"
					name="password"
					value={password}
					onChange={({ target }) => onChangePassword(target)}
					onBlur={({ target }) => onBlurPassword(target)}
				/>
				{copyPasswordError && (
					<div className={styles.formError}>{copyPasswordError}</div>
				)}
				<input
					className={styles.formInput}
					type="password"
					placeholder="Пароль"
					name="password"
					value={copyPassword}
					onChange={({ target }) => onChangeCopyPassword(target)}
					onBlur={({ target }) => onBlurCopyPassword(target)}
				/>
				<button
					className={`${styles.formInput} ${styles.formBtn}`}
					type="submit"
					ref={submitButtonRef}
					disabled={!!emailError || !!passwordError || !!copyPasswordError}
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
};
