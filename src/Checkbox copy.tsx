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
      <button className="Property1Selected" style={{width: 164, height: 44, paddingTop: 11, paddingBottom: 12, paddingLeft: 12, paddingRight: 12, background: '#1C1C1C', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'flex-start', gap: 84, display: 'inline-flex'}}>
      <p className="Text" style={{color: 'white', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>{props.text}</p>
      <div className="MingcuteCheckFill" style={{width: 20, height: 20, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
      <div className="Group" style={{width: 20, height: 20, position: 'relative'}}>
      <img src={`${process.env.PUBLIC_URL}/image/ButtonCheck.svg`} style={{width: 20, height: 20, left: 0, top: 0, position:'relative'}}  />
      </div>
      </div>
      </button>
      : 
      <button className="Property1Default" style={{width: 164, height: 44, paddingTop: 11, paddingBottom: 12, paddingLeft: 16, paddingRight: 115, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Text" style={{color: '#757575', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>{props.text}</div>
      </button>
    }
    </>
    
  );
};