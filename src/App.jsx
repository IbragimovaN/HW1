import "./App.css";
import { useState } from "react";
import Select from "react-select";


//1 способ
// function App() {

//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log({email, login, password})
//   }

//   const [email, setEmail] = useState('')
//   const [login, setLogin] = useState('')
//   const [password, setPassword] = useState('')
//   return (
//     <div className="App">
//       <form onSubmit={onSubmit}>
//           <input type="email" name="email" placeholder="email" value={email} onChange={({target}) => setEmail(target.value)}/>
//           <input type="text" name="login" placeholder="логин" value={login} onChange={({target}) => setLogin(target.value)}/>
//           <input type="password" name="password" placeholder="пароль" value={password} onChange={({target}) => setPassword(target.value)}/>
//           <button type="submit">отправить</button>
//       </form>
//     </div>
//   );
// }
// export default App;




//2 способ 
// const initialState = {
//   email: "",
//   login: "",
//   password: ""
// }

// const useStore = () =>{
//   const [state, setState] = useState(initialState)
//   return {
//     getState: () => state,
//     updateState: (fieldName, newValue) =>{
//       setState({...state, [fieldName] : newValue})
//     }
//   }
// }

// function App() {
//   const {getState, updateState} = useStore()
//   const onSubmit = (event) => {
//     event.preventDefault()
//     console.log(getState())
//   }

//   const {email, login, password} = getState()

  
//   return (
//     <div className="App">
//       <form onSubmit={onSubmit}>
//           <input type="email" name="email" placeholder="email" value={email} onChange={({target}) => updateState('email',target.value )
//           }/>
//           <input type="text" name="login" placeholder="логин" value={login} onChange={({target}) => updateState('login',target.value )}/>
//           <input type="password" name="password" placeholder="пароль" value={password} onChange={({target}) => updateState('password',target.value )}/>
//           <button type="submit">отправить</button>
//       </form>
//     </div>
//   );
// }
// export default App;




//cамост 2 способ со всеми доработками и оптимизацией

const initialState = {
  email: "",
  login: "",
  password: "" 
}
const useStore = () =>{
  const [state, setState] = useState(initialState)
    return {
      getState: () => state,
      updateState: (fieldName, newValue) =>{
        setState({...state, [fieldName] : newValue})
      },
      resetState() { 
        setState(initialState);
      }

    }

}



function App() {
const {getState, updateState, resetState} = useStore()
const {email, login, password} = getState()

const onChange = ({ target }) => updateState(target.name, target.value);

  const onSubmit = (event) =>{
    event.preventDefault()
    console.log({email, login, password})
  }

  // const [selectedProduct, setSelectedProduct] = useState('tv');
  //   const [selectedColors, setSelectedColors] = useState(['black', 'silver']);

  //   const onSelectedProductChange = ({ target }) => {
  //       setSelectedProduct(target.value);
  //   };

  //   const onSelectedColorsChange = ({ target }) => {
  //       const newSelectedColors = [...target.selectedOptions]
  //           .map((selectedOption) => selectedOption.value);

  //       setSelectedColors(newSelectedColors);
  //   };
  //используем пакет select

  const productOptions = [
    { value: 'phone', label: 'Телефон' },
    { value: 'tv', label: 'Телевизор' },
    { value: 'laptop', label: 'Ноутбук' }
  ]

  const colorOptions = [
    { value: 'black', label: 'Черный' },
    { value: 'silver', label: 'Серебристый' },
    { value: 'white', label: 'Белый' }
  ]



  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="email" value={email} onChange={onChange}/>
        <input type="login" name="login" placeholder="login" value={login} onChange={onChange}/>
        <input type="password" name="password" placeholder="password" value={password} onChange={onChange}/>
        <button>отправить</button>
        <button type="button" onClick={resetState}>сбросить</button>
          
      </form>
      <div>
            {/* <select value={selectedProduct} onChange={onSelectedProductChange}>
                <option value="tv">Телевизор</option>
                <option value="smartphone">Смартфон</option>
                <option value="laptop">Ноутбук</option>
            </select>
            <select
                multiple={true}
                value={selectedColors}
                onChange={onSelectedColorsChange}
            >
                <option value="black">Чёрный</option>
                <option value="white">Белый</option>
                <option value="silver">Серебристый</option>
            </select> */}
             <Select options={productOptions} defaultValue={productOptions[0]} />
             <Select options={colorOptions} isMulti />
        </div>

    </div>
  );
}
export default App;
