import { useState, useRef } from "react";
import { Props, User } from "../Types";
import { registerUser, UserRegistrationResponseDto } from "../apis/apis";

interface SplashProps extends Props{
    setUser:React.Dispatch<React.SetStateAction<User>>,
}

export const Splash = (props : SplashProps) => {

    const [nickname, setNickname] = useState<string>('');
    const getKeyboard = (event:any) => {
        setNickname(event.target.value);
    }
    const click = () => {
        registerUser({username:nickname}).then((res) => {
            props.setUser({nickname:nickname, uid:res.data.userId, topic:[], before:-1, type:'', end:''});
            console.log(res);
            props.setPage(1);
        }).catch((err) => {console.log(err)});
        
    }
    
    return(
        <div style={{width:'100%', height:'100%'}}>
            <img src={`${process.env.PUBLIC_URL}/image/LogoDriveAgora.png`}
            style={{position:'absolute', left:'18px', top:'277px'}}/>
            <img src={`${process.env.PUBLIC_URL}/image/LogoSlogun.png`}
            style={{position:'absolute', left:'18px', top:'401px'}}/>
            <input type='text' value={nickname}
                style={{position:'absolute', left:'20px', top:'500px', width:'335px', height:'44px', borderRadius:'16px', backgroundImage:`${process.env.PUBLIC_URL}/image/SearchbarAddress.png`, backgroundRepeat:'no-repeat', textAlign:'center'}}
                onChange={getKeyboard}>
            </input>
            <a style={{position:'absolute', top:'552px', left:'30px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>로 시작하기</a>
            <button 
                style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', alignItems:'center', gap:'10px', display:'inline-flex'}}
                onClick={click} >
                <p style={{wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', }}>Drive Agora 시작하기</p>
            </button>
        </div>

    );
}