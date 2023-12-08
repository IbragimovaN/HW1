import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";
export const useRequestUpdate = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = () => {
		setIsUpdating(true);
		const smartphoneDbRef = ref(db, "products/002");

		set(smartphoneDbRef, {
			name: "Смартфон",
			price: 15000,
		})
			.then((response) => {
				console.log("Данные о смартфоне обновлены:", response);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestUpdate };
};
