import React from "react";
import { Props } from "../Types";

interface MatchedProps extends Props{
    selection:boolean,
    setSelection:React.Dispatch<React.SetStateAction<boolean>>,
}
export const Matched = (props: MatchedProps) => { 
    return (
    <div id='matched'>
        <h2 style={{position:'absolute', top:'58px', left:'center', width:'76px', height:'20px', alignItems:'center', backgroundColor:'#FFF', gap:'97px', lineHeight:'20px', fontWeight:'700',fontSize:'14px',color:'#1C1C1C', textAlign:'center'}}>최종확인</h2>
        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapHalf.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div style={{position:'absolute', top:'396px', left:'0px', width:'100vw', height:'416px', boxShadow:'0px 0px 32px 0px', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <p style={{position:'absolute', left:'141px', top:'128px', wordWrap: 'break-word', textAlign: 'center', color: '#1C1C1C', fontSize:'20px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'150%'}}>매칭 대기 중</p>
            <div style={{position:'absolute', left:'141px', top:'128px', wordWrap: 'break-word', textAlign: 'center', color: '#1C1C1C', fontSize:'20px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'150%'}}>스피너</div>
        </div>
    </div>
    );
}