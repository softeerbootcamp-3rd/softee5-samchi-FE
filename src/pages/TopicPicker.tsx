import React, {useState} from "react";
import { CheckBox } from "../Checkbox";
import {Topics, Props} from '../Types'

interface TopicPickerProps extends Props{
    selection:boolean[];
    setSelection:React.Dispatch<React.SetStateAction<boolean[]>>;
}


export const TopicPicker = (props:TopicPickerProps) => {
    let ind : number = 0;

    return (
        <div style={{width:'100%', height:'100%'}}>
        <h1 style={{position:'absolute', width:'160px', height:'60px', left:'20px', top:'104px', fontWeight:'400', fontSize:'20px', lineHeight:'150%', letterSpacing:'-0.6px', textAlign:'left'}}>대화하고 싶은<br/>관심사를 선택하세요.</h1>
        <p style={{position:'absolute', width:'257px', height:'21px', left:'20px', top:'168px', color: '#4F4F4F', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', fontStyle:'normal', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>많이 선택할수록 다양한 사람들을 찾을 수 있어요</p>
        
        {props.selection[0] == true ? 
        <button 
            style={{position:"absolute", width:'164px', height:'44px', left:'20px', top:'221px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (0 === i) {return !v;} else {return v;}}))}>
                <p style={{position:'absolute', top:'10px', left:'16px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>아무 주제나 좋아요 </p>
            <img style={{position:'absolute', width:'24px', height:'24px', right:'16px', top:'10px'}} src={`${process.env.PUBLIC_URL}/image/ImageDice.svg`} />
        </button>
        :
        <button 
        style={{position:"absolute", width:'164px', height:'44px', left:'20px', top:'221px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (0 === i) {return !v;} else {return v;}}))}>
            <p style={{position:'absolute', top:'10px', left:'16px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>아무 주제나 좋아요 </p>
            <img style={{position:'absolute', width:'24px', height:'24px', right:'16px', top:'10px'}} src={`${process.env.PUBLIC_URL}/image/ImageDice.svg`} />
            
        </button>
        }

        {props.selection[1] == true ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (1 === i) {return !v;} else {return v;}}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>금융</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (1 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>금융</p>
        </button>
        }

        {props.selection[2] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'90px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (2 === i) {return !v;} else {return v;}}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증권</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'90px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (2 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증권</p>
        </button>
        }

        {props.selection[3] ? 
        <button 
            style={{position:"absolute", width:'93px', height:'36px', left:'160px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (3 === i) {return !v;} else {return v;}}))}>
                <p style={{position:"absolute", width:'53px', height:'21px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>산업/재계</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'93px', height:'37px', left:'160px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (3 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'53px', height:'21px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>산업/재계</p>
        </button>
        }

        {props.selection[4] ? 
        <button 
            style={{position:"absolute", width:'76px', height:'36px', left:'259px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (4 === i) {return !v;} else {return v;}}))}>
                <p style={{position:"absolute", width:'36px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>부동산</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'76px', height:'37px', left:'259px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (4 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'36px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>부동산</p>
        </button>
        }

        {props.selection[5] ? 
        <button 
            style={{position:"absolute", width:'103px', height:'36px', left:'20px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (5 === i) {return !v;} else {return v;}}))}>
                <p style={{ color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>글로벌 경제</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'103px', height:'37px', left:'20px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (5 === i) {return !v;} else {return v;}}))}>
            <p style={{ position:"absolute", width:'65px', height:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>글로벌 경제</p>
        </button>
        }

        {props.selection[6]? 
        <button 
            style={{position:"absolute", width:'93px', height:'36px', left:'129px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (6 === i) {return !v;} else {return v;}}))}>
                <p style={{color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증기/벤처</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'93px', height:'37px', left:'129px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (6 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'53px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증기/벤처</p>
        </button>
        }

        {props.selection[7]? 
        <button 
            style={{position:"absolute", width:'91px', height:'36px', left:'228px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (7 === i) {return !v;} else {return v;}}))}>
                <p style={{color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>생활 경제</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'91px', height:'37px', left:'228px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (7 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>생활 경제</p>
        </button>
        }

        {props.selection[8] ? 
        <button 
            style={{position:"absolute", width:'91px', height:'36px', left:'20px', top:'403px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (8 === i) {return !v;} else {return v;}}))}>
                <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>경제 일반</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'91px', height:'37px', left:'20px', top:'403px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if (8 === i) {return !v;} else {return v;}}))}>
            <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>경제 일반</p>
        </button>
        }

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#1C1C1C', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {props.setPage(props.page + 1)}} >
                <p style={{position:'absolute', top:'16px', left:'142px', width:'51px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>선택완료</p>
        </button>
        </div>
    );
}