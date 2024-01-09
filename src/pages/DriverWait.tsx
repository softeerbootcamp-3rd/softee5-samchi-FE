import React, {useEffect, useState} from "react";
import { Driver, Props, User } from "../Types";
import {applicationDriveChat, checkApplicationAccept} from '../apis/apis'

interface DriverWaitProps extends Props{
    user:User,
    driver:Driver,
}
export const DriverWait = (props: DriverWaitProps) => { 

    const [board, setBoard] = useState<number>(0);
    var back = false
    
    /*
    var dummy = setTimeout(()=>{props.setSelection(1)}, 5000);
    
    useEffect(()=>{
        props.setPage(props.selection === -1? 5 : 7);
    }, [props.selection])
    */
    useEffect(() => {
        applicationDriveChat({driverId:props.driver.did}, props.user.uid).then((res) => {
            console.log('applicationDriveChat Successed' + res);
            res.data.success && setBoard(res.data.matchedId);
        }).catch(err => console.log('Send Driver Call Failed : ' + err));
    }, []);

    useEffect(() => {
        checkApplicationAccept(board).then(res => {
            console.log('Get Driver Acception : ' + res)
            if(back) {back = false; props.setPage(6);}
            if(res.data[0].isMatchConfirmed) props.setPage(8);
            else props.setPage(6);
            }).catch(err => {console.log('Get Driver Acception Failed : ' + err);});
        
    }, [board]);

    return (
    <div id='wait'>
        <h2 style={{position:'absolute', top:'58px', left:'center', width:'76px', height:'20px', alignItems:'center', backgroundColor:'#FFF', gap:'97px', lineHeight:'20px', fontWeight:'700',fontSize:'14px',color:'#1C1C1C', textAlign:'center'}}>최종확인</h2>
        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapSetDestDummy.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div id='Sheet' style={{position:'absolute', top:'396px', left:'0px', width:'100vw', height:'416px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <p style={{position:'absolute', left:'141px', top:'128px', wordWrap: 'break-word', textAlign: 'center', color: '#1C1C1C', fontSize:'20px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'150%'}}>매칭 대기 중</p>
            <img src={`${process.env.PUBLIC_URL}/image/ImageSpinnerDummy.png`} style={{position:'absolute', left:'164px', top:'175px', width:'48px', height:'48px'}}></img>
        </div>
        

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', border:'1px solid', borderColor:'#3885F8', backgroundColor:'#F7F9FF', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {back = true; props.setPage(6);}} >
                <p style={{ top:'16px', height:'20px',  wordWrap: 'break-word', textAlign: 'center', color: '#3885F8', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>취소하기</p>
        </button>
    </div>
    );
}