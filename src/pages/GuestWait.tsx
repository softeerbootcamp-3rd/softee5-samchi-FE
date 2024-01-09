import { useEffect } from 'react';
import {registerDriveChat} from '../apis/apis'
import { Driver, Guest, User, Props } from "../Types";

interface GuestWaitProps extends Props{
    user:User,
    driver:Driver,
}
export const GuestWait = (props: GuestWaitProps) => { 


    
    var dummy = setTimeout(()=>{props.setPage(23)}, 5000);
    useEffect(() => {
        registerDriveChat(
            {
                userType: 'DRIVER',
                topicIds: props.driver.topic,
                destinationAddress:props.driver.end,
                estimateStartTime: props.driver.expire,
            }, props.user.uid
        ).then(res => {
                
        })
    }, [])

    return (
    <div id='guestWait'>
        

        <a style={{position:'absolute', top:'237px', left:'138px', color:'4F4F4F', textAlign:'center', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', letterSpacing:'-0.6px', textDecorationLine:'underline'}}
            onClick={()=>{props.setPage(21)}}>동승 요청 취소하기</a>
    </div>
    );
}