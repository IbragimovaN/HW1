import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDeleting = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleting = () => {
		setIsDeleting(true);

		const tvDbRef = ref(db, "products/001");

		remove(tvDbRef)
			.then((response) => {
				console.log("Телевизор удален:", response);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleting };
};
