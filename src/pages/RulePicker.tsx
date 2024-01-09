import React from "react";

interface Props{
    selection:number,
    setSelection:React.Dispatch<React.SetStateAction<number>>,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    style?:React.CSSProperties,
}

export const RulePicker = (props : Props) => {
    
    return(
        <div style={{width:'100%', height:'100%'}}>
        <h1 style={{position:'fixed', width:'226px', height:'60px', left:'20px', top:'104', fontWeight:'700', fontSize:'20px', lineHeight:'150%', letterSpacing:'-0.6px', textAlign:'left'}}>오늘은<br/>운전하시나요? 동승하시나요?</h1>
        
        <button 
        style={{position:"absolute", left:'20px', top:'301px'}}
        onClick={()=>props.setSelection(1)}>
            {props.selection === 1 ? <img src={`${process.env.PUBLIC_URL}/image/ButtonDriverCheck.png`} style={{width:'164px', height:'209px'}}/> : <img src={`${process.env.PUBLIC_URL}/image/ButtonDriverDefault.png`}  style={{width:'164px', height:'209px'}}/>}
        </button>
        <button 
        style={{position:"absolute", right:'11px', top:'301px'}}
        onClick={()=>props.setSelection(2)}>
        {props.selection === 2 ? <img src={`${process.env.PUBLIC_URL}/image/ButtonGuestCheck.png`} style={{width:'164px', height:'209px'}}/> : <img src={`${process.env.PUBLIC_URL}/image/ButtonGuestDefault.png`}  style={{width:'164px', height:'209px'}}/>}
        </button>
        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#1C1C1C', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {if(props.selection !== -1) props.setPage(props.page + 1)}} >
                <p style={{position:'absolute', top:'16px', left:'142px', width:'51px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>선택완료</p>
        </button>
        </div>

    );
}