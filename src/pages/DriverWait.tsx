import React, {useState} from "react";
import { Driver, Props, Guest } from "../Types";
//import {registerDriveChat, driveChatApplicationCheck, confirmMatching} from '../apis/apis'

interface DriverWaitProps extends Props{
    driver:Driver,
    setDriver:React.Dispatch<React.SetStateAction<Driver>>,
    guest:Guest,
    setGuest:React.Dispatch<React.SetStateAction<Guest>>,
    matchID:number,
    setMatchID:React.Dispatch<React.SetStateAction<number>>,
}
export const DriverWait = (props: DriverWaitProps) => { 

    //const [board, setBoard] = useState<number>(0);
    //const [step, setStep] = useState<boolean>(false);
    //const [cancel, setCancel] = useState<boolean>(false);

    
    
    var dummy = setTimeout(()=>{props.setPage(8)}, 5000);
    /*
    useEffect(()=>{
        props.setPage(props.selection === -1? 5 : 7);
    }, [props.selection])
    
    useEffect(() => {
        registerDriveChat(
            {
                userType: 'DRIVER',
                topicIds: props.driver.topic,
                destinationAddress:props.driver.end,
                estimateStartTime: props.driver.expire,
            }, props.driver.uid
        ).then(res => {
            var c = ()=>cancel;
            if(!c())
            {
                props.setDriver({
                    did:res.data[0].driverId,
                    uid:props.driver.uid,
                    type:'DRIVER',
                    expire:props.driver.expire,
                    end:props.driver.end,
                    before:props.driver.before,
                    nickname:props.driver.nickname,
                    topic:props.driver.topic
                });
                setStep(true);
            }
        }).catch(err => 'Cannot register driver : ' + err);
    }, []);

    useEffect(() => {
        driveChatApplicationCheck(props.driver.did).then((res) => {
            console.log('driveChatApplicationCheck Successed' + res);
            res.data[0].isFound && props.setMatchID(res.data[0].matchId);
        }).catch(err => console.log('Send Driver Call Failed : ' + err));
    }, [step]);

    useEffect(() => {
        confirmMatching({matchingId:props.matchID}, props.driver.uid).then(res => {
            console.log('Get REQUEST : ' + res)
            var c = ()=>cancel;
            if(c()) {setCancel(false); props.setPage(6); return;}
            setGuest(res.data[0].guestId)

            }).catch(err => {console.log('Get Driver Acception Failed : ' + err);});
            props.setPage(23);
    }, [props.matchID]);
    */

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
            onClick={() => {clearTimeout(dummy); props.setPage(6);}} >
                <p style={{ top:'16px', height:'20px',  wordWrap: 'break-word', textAlign: 'center', color: '#3885F8', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>취소하기</p>
        </button>
    </div>
    );
}