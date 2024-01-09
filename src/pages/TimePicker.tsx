import React from "react";
import { Props } from "../Types";

interface TimePickerProps extends Props{
    selection:Date,
    setSelection:React.Dispatch<React.SetStateAction<Date>>,
}
export const TimePicker = (props: TimePickerProps) => { 
    return (
    <div id='time'>
        <h2 style={{position:'absolute', top:'58px', left:'149px', width:'76px', height:'20px', alignItems:'center', backgroundColor:'#FFF', gap:'97px', lineHeight:'20px', fontWeight:'700',fontSize:'14px'}}>출발 예정시간</h2>
        <p style={{position:'absolute', top:'112px', left:'20px', width:'42px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>목적지</p>

        <img src={`${process.env.PUBLIC_URL}/image/ListDestination.png`} style={{position:'absolute', top:'136px', left:'0px', width:'375px', height:'64px'}}/>

        <h2 style={{position:'absolute', top:'220px', left:'20px', width:'28px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>경로</h2>
        <img src={`${process.env.PUBLIC_URL}/image/ListTime.png`} style={{position:'absolute', top:'244px', left:'0px', width:'375px', height:'64px'}}/>

        <div style={{position:'absolute', top:'396px', left:'0px', width:'375px', height:'416px', boxShadow:'0px 0px 32px 0px', borderRadius:'24px 24px 0px 0px'}}>
            <h2 style={{position:'absolute', top:'48px', left:'20px', width:'217px', height:'30px', fontSize:'20px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%'}}>날짜와 시간을 설정해주세요</h2>
        </div>

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {console.log(props.selection);if(props.selection.getTime !== Date.now) props.setPage(props.page + 1)}} >
                <p style={{position:'absolute', top:'16px', left:'142px', width:'51px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>선택완료</p>
        </button>
    </div>
    );
}