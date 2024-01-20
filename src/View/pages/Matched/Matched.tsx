import React, { useEffect } from "react";
import { Props } from "../Types";

interface MatchedProps extends Props{
}
export const Matched = (props: MatchedProps) => { 

    setTimeout(()=>{props.setPage(9)}, 3000);
    
    return (
    <div id='matched'>
        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapSetDestDummy.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div id='Sheet' style={{position:'absolute', top:'396px', left:'0px', width:'100vw', height:'416px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <p style={{position:'absolute', left:'147px', top:'128px', wordWrap: 'break-word', textAlign: 'center', color: '#1C1C1C', fontSize:'20px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'150%'}}>매칭 완료!</p>
            <img src={`${process.env.PUBLIC_URL}/image/ImageMatched.png`} style={{position:'absolute', top:'27px', left:'0px'}}/>
        </div>
    </div>
    );
}