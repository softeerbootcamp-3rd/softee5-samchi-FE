import { useEffect, useState } from 'react';
import {registerDriveChat, applicationDriveChat, checkApplicationAccept} from '../apis/apis'
import { Driver, Guest, Props } from "../Types";

interface GuestWaitProps extends Props{
    guest:Guest,
    setGuest:React.Dispatch<React.SetStateAction<Guest>>,
    driver:Driver,
    matchID:number,
    setMatchID:React.Dispatch<React.SetStateAction<number>>,

}
export const GuestWait = (props: GuestWaitProps) => { 
    const [step, setStep] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);


    
    //var dummy = setTimeout(()=>{props.setPage(23)}, 5000);
    useEffect(() => {
        registerDriveChat(
            {
                userType: 'GUEST',
                topicIds: props.guest.topic,
                destinationAddress:'',
                estimateStartTime: '',
            }, props.guest.uid
        ).then(res => {
            var c = ()=>cancel;
            if(!c())
            {
                props.setGuest({
                    gid:res.data.guestId,
                    uid:props.guest.uid,
                    type:'GUEST',
                    end:props.guest.end,
                    before:props.guest.before,
                    nickname:props.guest.nickname,
                    topic:props.guest.topic
                });
            }
            setStep(true);
        }).catch(err => 'Cannot register driver : ' + err);
    }, []);
    useEffect(() => {
        applicationDriveChat({driverId:props.driver.did}, props.guest.uid).then((res) => {
            console.log('applicationDriveChat Successed' + res);
            res.data.success && props.setMatchID(res.data.matchedId);
        }).catch(err => console.log('Send Driver Call Failed : ' + err));
    }, [step]);

    useEffect(() => {
        /*
        checkApplicationAccept(props.matchID).then(res => {
            console.log('Get Driver Acception : ' + res)
            var c = ()=>cancel;
            if(c()) {setCancel(false); props.setPage(6); return;}
            if(res.data[0].isMatchConfirmed) props.setPage(23);
            else props.setPage(21);
            }).catch(err => {console.log('Get Driver Acception Failed : ' + err);});
            */
        props.setPage(23);
    }, [props.matchID]);

    return (
    <div id='guestWait'>
        <a style={{position:'absolute', top:'237px', left:'138px', color:'4F4F4F', textAlign:'center', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', letterSpacing:'-0.6px', textDecorationLine:'underline'}}
            onClick={()=>{setCancel(true); props.setPage(21)}}>동승 요청 취소하기</a>
    </div>
    );
}