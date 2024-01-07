import React from "react";
import styles from './fixtures/Button.module.css'

type Props = {
    index:number,
    selected:Array<boolean>,
    onSelect:React.Dispatch<React.SetStateAction<Array<boolean>>>,
    text:string,
    style?:React.CSSProperties,
    className?:string,
    children?: React.ReactNode
  }
  
export const CheckBox = (props:Props) => {

  const clicked = () => {
    const newSelected = 
    props.selected.slice(0, props.index).concat( !props.selected[props.index], ...props.selected.slice(props.index+1));
    props.onSelect(newSelected);
    console.log(newSelected);
  }
  const stringCN = styles.rounded +' text-xl px-7 py-3 rounded-2xl border-solid border-gray-200 border-2 '+
  'transition-colors duration-150 focus-visible:duration-0 ';
  
  return(
    <>
    {props.selected && props.selected[props.index] ?
      <button
        className={stringCN + `bg-black text-white`}
        onClick={clicked} 
        style={props.style}>
        <p>{props.text}</p>
        </button>
      : 
      <button 
        className={stringCN + `bg-white text-gray-600`}
        onClick={clicked}
        style={props.style}> 
        <p>{props.text}</p>
        </button> 
    }
    </>
    
  );
};