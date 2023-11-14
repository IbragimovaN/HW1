// import { useEffect } from 'react';
import { useState } from 'react';

export const MyComponent = (props) => {
	const [currentDate, setCurrentDate] = useState(new Date());

	/** 
   * Это один из хуков — вспомогательная функция для React-компонента.
   * Подробно изучим его в уроке "Запросы к серверу".
   */ 
	// useEffect(() => {
	// 	console.log(date);
	// }, []);
  setTimeout(() => {
    setCurrentDate(new Date());
  },1000)
	return (
		<div>{(String(currentDate).substring(16, 25))}</div>
	);
};
