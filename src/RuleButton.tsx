import React from "react";
import styles from './fixtures/Button.module.css'

type Props = {
    groupID:number,
    selected:number,
    onSelect:React.Dispatch<React.SetStateAction<number>>,
    imageSource?:string,
    text:string,
    children?: React.ReactNode
  }
  
export const RuleButton = (props:Props) => {

  const clicked = () => {
    props.onSelect(props.groupID);
  }

  const stringCN = styles.rounded + ' text-xl px-7 py-3 rounded-2xl border-solid border-gray-200 border-2 '+
  'transition-colors duration-150 focus-visible:duration-0 ';

  return(
    <>
    {props.selected === props.groupID ?
      <button
        className={stringCN + `bg-black text-white`}
        onClick={clicked} > 
        {props.imageSource ? <img src={props.imageSource} alt='ButtonImage'/> : <></>}
        <p>{props.text}</p>
        </button>
      : 
      <button 
        className={stringCN + `bg-white text-gray-600`}
        onClick={clicked}> 
        {props.imageSource ? <img src={props.imageSource} alt='ButtonImage'/> : <></>}
        <p>{props.text}</p>
        </button>
    }
    </>
    
  );
};