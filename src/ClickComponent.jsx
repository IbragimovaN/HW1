import { useState } from "react";

export const ClickComponent = () => {
  // const [value, setValue] = useState(0);
  const [showText, setShowText] = useState(true);
  const onClick = () => {
    setShowText(!showText);
  };
  

  return(
    <>
    {/* <div>{value}</div>
    <button
    onClick = {()=>setValue(value + 1)}
    >Прибавить 1</button> */}
    {showText && <div>Какой-то текст</div>}
    <button onClick={
      onClick
    }>
      {showText ? 'Скрыть' : 'Показать'} текст
    </button>
    
    </>
  )

}
