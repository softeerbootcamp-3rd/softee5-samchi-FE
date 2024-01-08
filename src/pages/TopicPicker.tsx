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
        <h1 style={{position:'absolute', width:'160px', height:'60px', left:'20px', top:'104px', fontWeight:'700', fontSize:'20px', lineHeight:'150%', letterSpacing:'-0.6px', textAlign:'left'}}>대화하고 싶은<br/>관심사를 선택하세요.</h1>
        <p style={{position:'absolute', width:'257px', height:'21px', left:'20px', top:'168px', color: '#4F4F4F', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', fontStyle:'normal', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>많이 선택할수록 다양한 사람들을 찾을 수 있어요</p>
        
        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>금융</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>금융</p>
        </button>
        }

        {props.selection[1] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'90px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[1]){return true;} if (1 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증권</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'90px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[1]){return true;} if (1 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증권</p>
        </button>
        }

        {props.selection[2] ? 
        <button 
            style={{position:"absolute", width:'93px', height:'36px', left:'160px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[2]){return true;} if (2 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'53px', height:'21px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>산업/재계</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'93px', height:'37px', left:'160px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[2]){return true;} if (2 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'53px', height:'21px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>산업/재계</p>
        </button>
        }

        {props.selection[3] ? 
        <button 
            style={{position:"absolute", width:'76px', height:'36px', left:'259px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[3]){return true;} if (3 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'36px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>부동산</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'76px', height:'37px', left:'259px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[3]){return true;} if (3 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'36px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>부동산</p>
        </button>
        }

        {props.selection[4] ? 
        <button 
            style={{position:"absolute", width:'103px', height:'36px', left:'20px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[4]){return true;} if (4 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>글로벌 경제</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'103px', height:'37px', left:'20px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[4]){return true;} if (4 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'63px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>글로벌 경제</p>
        </button>
        }

        {props.selection[5] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'129px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[5]){return true;} if (5 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'63px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증기/벤처</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'93px', height:'37px', left:'129px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[5]){return true;} if (5 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'53px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>증기/벤처</p>
        </button>
        }

        {props.selection[6] ? 
        <button 
            style={{position:"absolute", width:'91px', height:'36px', left:'228px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[6]){return true;} if (6 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>생활 경제</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'91px', height:'37px', left:'228px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[6]){return true;} if (6 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>생활 경제</p>
        </button>
        }

        {props.selection[7] ? 
        <button 
            style={{position:"absolute", width:'91px', height:'36px', left:'20px', top:'403px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[7]){return true;} if (7 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>경제 일반</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'91px', height:'37px', left:'20px', top:'403px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[7]){return true;} if (7 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'51px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>경제 일반</p>
        </button>
        }

        {props.selection[8] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[8]){return true;} if (8 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>사건사고</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[8]){return true;} if (8 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>사건사고</p>
        </button>
        }

        {props.selection[9] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[9]){return true;} if (9 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>노동</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[9]){return true;} if (9 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>노동</p>
        </button>
        }

        {props.selection[10] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[10]){return true;} if (10 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>언론</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[10]){return true;} if (10 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>언론</p>
        </button>
        }

        {props.selection[11] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[11]){return true;} if (11 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>환경</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[11]){return true;} if (11 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>환경</p>
        </button>
        }

        {props.selection[12] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[12]){return true;} if (12 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>교육</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[12]){return true;} if (120 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>교육</p>
        </button>
        }

        {props.selection[13] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[13]){return true;} if (13 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>인권/복지</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[13]){return true;} if (13 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>인권/복지</p>
        </button>
        }

        {props.selection[14] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[14]){return true;} if (14 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>식품/의료</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[14]){return true;} if (14 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>식품/의료</p>
        </button>
        }

        {props.selection[15] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[15]){return true;} if (15 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>지역</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[15]){return true;} if (15 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>지역</p>
        </button>
        }

        {props.selection[16] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[16]){return true;} if (16 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>인물</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[16]){return true;} if (16 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>인물</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>사회 일반</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>사회 일반</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>건강정보</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>건강정보</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>자동차/시승기</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>자동차/시승기</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>도로/교통</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>도로/교통</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>여행/레저</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>여행/레저</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>음식/맛집</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>음식/맛집</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>패션/뷰티</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>패션/뷰티</p>
        </button>
        }

        {props.selection[0] ? 
        <button 
            style={{position:"absolute", width:'64px', height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
                <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>공연/전시</p>
        </button>
        :
        <button 
        style={{position:"absolute", width:'64px', height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>props.setSelection(props.selection.map((v, i)=>{if(!props.selection[0]){return true;} if (0 === i) {return !v;} return v;}))}>
            <p style={{position:"absolute", width:'24px', height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>공연/전시</p>
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