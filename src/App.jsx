import { useState, memo, useCallback, useMemo } from "react";
import styles from "./App.module.css";

export const Field = memo(({ name, label, value, onChange }) => {
	console.log(name);
	return (
		<label>
			<span>
				{label}:
				<input
					name={name}
					value={value}
					onChange={({ target }) => onChange(target)}
				></input>
			</span>
		</label>
	);
});

export const App = () => {
	console.log("------------App-----------");
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);

	const onNumChange = useCallback((target) => {
		setNum(Number(target.value));
	}, []);

	const onDegreeChange = useCallback((target) => {
		setDegree(Number(target.value));
	}, []);

	const hardCalculateNum = useMemo(() => {
		new Array(20000000).fill(0).reduce((acc, item) => acc + item, num);
	}, [num]);

	const result = Math.pow(hardCalculateNum, degree);

	return (
		<div className={styles.app}>
			<div>
				{num} в степени {degree} = {result}
			</div>
			<Field name="numb" label="Число" value={num} onChange={onNumChange} />
			<Field
				name="degr"
				label="Степень"
				value={degree}
				onChange={onDegreeChange}
			/>
		</div>
	);
};
