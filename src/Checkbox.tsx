import React from "react";
import styles from './fixtures/Button.module.css'

type Props = {
    index:number,
    selected:Array<boolean>,
    onSelect:React.Dispatch<React.SetStateAction<Array<boolean>>>,
    text:string,
    children?: React.ReactNode
  }
  
export const CheckBox = (props:Props) => {

  const clicked = () => {
    const newSelected = props.selected.map((value, index) => {
        if(index === props.index) return value = !value;
        else return value;
    });
    props.onSelect(newSelected);
    console.log(newSelected);
  }
  const stringCN = styles.rounded +' text-xl px-7 py-3 rounded-2xl border-solid border-gray-200 border-2 '+
  'transition-colors duration-150 focus-visible:duration-0 ';
  //'hover:bg-gray-300 focus-visible:bg-gray-300',
    //'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-300',

  return(
    <>
    {props.selected && props.selected[props.index] ?
      <button
        className={stringCN + `bg-black text-white`}
        onClick={clicked} >
        <p>{props.text}</p>
        </button>
      : 
      <button 
        className={stringCN + `bg-white text-gray-600`}
        onClick={clicked}> 
        <p>{props.text}</p>
        </button> 
    }
    </>
    
  );
};