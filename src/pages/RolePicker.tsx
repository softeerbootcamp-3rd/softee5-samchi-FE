import React, {useState} from "react";
import { User, Guest, Driver } from "../Types";
import { registerDriveChat } from "../apis/apis";

interface Props{
    user:User,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    setGuest:React.Dispatch<React.SetStateAction<Guest>>,
    setDriver:React.Dispatch<React.SetStateAction<Driver>>,
    style?:React.CSSProperties,
}

export const RolePicker = (props : Props) => {

    const [selection, setSelection] = useState(-1);

    const click = () => {
        if(selection !== -1) 
        {
            if(selection === 2)
            registerDriveChat({
                userType:'GUEST',
                topicIds:props.user.topic,
                destinationAddress:'',
                estimateStartTime:''
            }, props.user.uid).then((res) => {
                props.setGuest({
                    uid:props.user.uid,
                    nickname:props.user.nickname,
                    before:props.user.before,
                    topic:props.user.topic,
                    end:'',
                    gid:res.data.guestId,
                    type:'GUEST',
                })
                console.log('Guest registered : ' + res);
                console.log('topic : ' + props.user.topic);
            }).catch(err => console.log('Topic Error : ' + err));
            else if (selection === 1)
            {
                props.setDriver({
                    uid:props.user.uid,
                    nickname:props.user.nickname,
                    before:props.user.before,
                    topic:props.user.topic,
                    end:'',
                    did:-1,
                    expire:'',
                    type:'DRIVER',
                })
            }
            props.setPage(selection === 1 ? 4 : 20)
        }
    }
    
    return(
        <div style={{width:'100%', height:'100%'}}>
        <h1 style={{position:'fixed', width:'226px', height:'60px', left:'20px', top:'104', fontWeight:'700', fontSize:'20px', lineHeight:'150%', letterSpacing:'-0.6px', textAlign:'left'}}>오늘은<br/>운전하시나요? 동승하시나요?</h1>
        
        <button 
        style={{position:"absolute", left:'20px', top:'301px'}}
        onClick={()=>setSelection(1)}>
            {selection === 1 ? <img src={`${process.env.PUBLIC_URL}/image/ButtonDriverCheck.png`} style={{width:'164px', height:'209px'}}/> : <img src={`${process.env.PUBLIC_URL}/image/ButtonDriverDefault.png`}  style={{width:'164px', height:'209px'}}/>}
        </button>
        <button 
        style={{position:"absolute", right:'11px', top:'301px'}}
        onClick={()=>setSelection(2)}>
        {selection === 2 ? <img src={`${process.env.PUBLIC_URL}/image/ButtonGuestCheck.png`} style={{width:'164px', height:'209px'}}/> : <img src={`${process.env.PUBLIC_URL}/image/ButtonGuestDefault.png`}  style={{width:'164px', height:'209px'}}/>}
        </button>
        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#FFFFFF'}}
            onClick={click} >
                <p style={{position:'absolute', top:'16px', left:'142px', width:'51px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>선택완료</p>
        </button>
        </div>

    );
}