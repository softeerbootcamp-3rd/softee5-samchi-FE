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
        onClick={clicked} style={{height:"209px", width:'164px'}}> 
        <img src={`${process.env.PUBLIC_URL}/image/ButtonCheck.png`}/>
        {props.imageSource ? <img src={props.imageSource} alt='ButtonImage' style={{height:"96px", width:'96px'}}/> : <></>}
        <br/>
        <p style={{fontSize:"10pt"}}>{props.text}</p>
        </button>
      : 
      <button 
        className={stringCN + `bg-white text-gray-600`}
        onClick={clicked} style={{height:"209px", width:'164px'}}> 
        <img src={`${process.env.PUBLIC_URL}/image/ButtonCheck.png`}/>
        {props.imageSource ? <img src={props.imageSource} alt='ButtonImage' style={{height:"96px", width:'96px'}} /> : <></>}
        <br/>
        <p style={{fontSize:"10pt"}}>{props.text}</p>
        </button>
    }
    </>
    
  );
};