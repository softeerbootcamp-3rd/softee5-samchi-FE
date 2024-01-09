import React from "react";
import { Props } from "../Types";

interface MainProps extends Props{
}

export const Main = (props : MainProps) => {
    
    return(
        <div id='main' style={{width:'100%', height:'100%'}}>
            <img src={`${process.env.PUBLIC_URL}/image/MapHostWaitingCut.png`}
                style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />

            <img src={`${process.env.PUBLIC_URL}/image/MapHostWaitingCut.png`}
                style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />

            <button style={{position:'absolute', width:'42px', height:'42px', top:'300px', left:'300px'}}>
                <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`}/>
            </button>
            <button>
                <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`}/>
            </button>

            <button 
                style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', alignItems:'center', gap:'10px', display:'inline-flex'}}
                onClick={() => {props.setPage(2)}} >
                <p style={{wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', }}>Drive Agora 시작하기</p>
            </button>
        </div>

    );
}