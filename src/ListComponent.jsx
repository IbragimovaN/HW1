
const products = [
	
  { id: '001', name: 'Чайник' },
  { id: '002', name: 'Утюг' },
];

export const ListComponent = (props) =>{

  return (	
    <ul>		
    {products.map(({ id, name }) => <li key={id}>{name}</li>)}	
    </ul>
    );
    
}
  