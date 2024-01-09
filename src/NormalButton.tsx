import React from "react";
import styles from './fixtures/Button.module.css'

type Props = {
    onClick:()=>void,
    imageSource?:string,
    text:string,
    disabled?:boolean,
    style?:React.CSSProperties,
    className?:string,
    children?: React.ReactNode,
  }
  
export const NormalButton = (props:Props) => {

  const clicked = () => {
    props.onClick();
  }

  const stringCN = styles.rounded + ' text-xl px-7 py-3 rounded-2xl border-solid border-gray-200 border-2 '+
  'transition-colors duration-150 focus-visible:duration-0 ';

  return(
      <button
        className={stringCN + `bg-black text-white`}
        onClick={clicked}
        style={props.style} 
        disabled={props.disabled??false}> 
        {props.imageSource ? <img src={props.imageSource} alt='ButtonImage'/> : <></>}
        <p>{props.text}</p>
      </button>
  );
};