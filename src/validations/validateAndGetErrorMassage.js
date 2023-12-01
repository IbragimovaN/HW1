export const validateAndGetErrorMessage = (schema, value) => {
	let errorMessage = null;
	try {
		schema.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join("\n");
	}

	return errorMessage;
};
