export const SortSelect = ({ value, onSort, option }) => {
	return (
		<div>
			<span>Сортировка</span>
			<select value={value} onChange={onSort}>
				{option.map((item) => (
					<option value={item.value}>{item.label}</option>
				))}
			</select>
		</div>
	);
};
