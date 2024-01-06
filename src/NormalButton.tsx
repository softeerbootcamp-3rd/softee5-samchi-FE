import React from "react";
import styles from './fixtures/Button.module.css'

type Props = {
    onClicked:()=>void,
    imageSource?:string,
    text:string,
    children?: React.ReactNode
  }
  
export const NormalButton = (props:Props) => {

  const clicked = () => {
    props.onClicked();
  }

  const stringCN = styles.rounded + ' text-xl px-7 py-3 rounded-2xl border-solid border-gray-200 border-2 '+
  'transition-colors duration-150 focus-visible:duration-0 ';

  return(
      <button
        className={stringCN + `bg-black text-white`}
        onClick={clicked} > 
        {props.imageSource ? <img src={props.imageSource} alt='ButtonImage'/> : <></>}
        <p>{props.text}</p>
      </button>
  );
};