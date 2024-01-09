import React from "react";
import { Props } from "../Types";

interface AggrementProps extends Props{
}
export const Aggrement = (props: AggrementProps) => { 
    return (
    <div id='Aggrement'>
        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapHalf.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div id='Sheet' style={{position:'absolute', bottom:'0px', left:'0px', width:'375px', height:'694px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            
        </div>

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {props.setPage(10)}} >
                <p style={{position:'absolute', top:'17px', left:'134px', width:'73px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>확인했습니다</p>
        </button>
    </div>
    );
}