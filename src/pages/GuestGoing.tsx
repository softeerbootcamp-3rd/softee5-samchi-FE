import React from "react";
import { Driver, Props } from "../Types";

interface GuestGoingProps extends Props{
    driver:Driver
}
export const GuestGoing = (props: GuestGoingProps) => { 

    setTimeout(() => {props.setPage(11)}, 5000);

    return (
    <div id='guestGaiting'>
        <img src={`${process.env.PUBLIC_URL}/image/MapHostRoute.png`}
        style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />

        <div style={{position:'absolute', bottom:'0vw', left:'0px', width:'100vw', height:'300px', boxShadow:'0px 0px 32px 0px', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <img style={{position:'absolute', width:'48px', height:'48px', top:'48px', left:'20px'}} 
                src={`${process.env.PUBLIC_URL}/image/ImageGuest.png`}/>
            <p style={{position:'absolute', top:'48px', left:'80px', fontSize:'16px', fontWeight:700, lineHeight:'150%', color:'#1C1C1C'}}>{props.driver.nickname} 동승자</p>
            <p style={{position:'absolute', top:'74px', left:'80px', fontSize:'14px', fontWeight:400, lineHeight:'150%', color:'#757575'}}>Drive Agora {props.driver.before}회</p>
            <img src={`${process.env.PUBLIC_URL}/image/ButtonCall.png`}style={{position:'absolute', width:'48px', height:'48px', top:'48px', right:'20px'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonUpload.png`} style={{position:'absolute', width:'48px', height:'48px', top:'48px', right:'76px'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag1.png`} style={{position:'absolute', top:'117px', left:'20px', color:'#D6D6D6'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag2.png`} style={{position:'absolute', top:'117px', left:'201px', color:'#D6D6D6'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag3.png`} style={{position:'absolute', top:'155px', left:'20px', color:'#D6D6D6'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag4.png`} style={{position:'absolute', top:'155px', left:'164px', color:'#D6D6D6'}} />

            <div id='Sheet' style={{position:'absolute', bottom:'0px', left:'0px', width:'375px', height:'694px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <a style={{position:'absolute', top:'237px', left:'138px', color:'4F4F4F', textAlign:'center', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', letterSpacing:'-0.6px', textDecorationLine:'underline'}}
            onClick={()=>{props.setPage(21)}}>동승 요청 취소하기</a>      
            </div>

        </div>
    </div>
    );
}