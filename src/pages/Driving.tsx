import { Props } from "../Types";
import { Guest } from "../Types";

interface DrivingProps extends Props{
    guest:Guest,
    //left:number[],
    //setLeft:React.Dispatch<React.SetStateAction<number[]>>,
}
export const Driving = (props: DrivingProps) => { 

    setTimeout(() => {
        props.setPage(30)
    }, 5000);

    return (
    <div id='hostwaiting'>
        <img src={`${process.env.PUBLIC_URL}/image/MapHostRoute.png`}
        style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />

        <div id='Sheet' style={{position:'absolute', bottom:'0vw', left:'0px', width:'100vw', height:'300px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <h2 style={{position:'absolute', display:'flex',justifyContent:'center', textAlign:'center', top:'32px', left:'129px', color:'#1C1C1C', fontSize:'24px', fontStyle:'normal', fontWeight:'700', lineHeight:'34px', letterSpacing:'-0.5px'}}>앞으로 400m</h2>
            <h2 style={{position:'absolute', top:'70px', left:'140px', color:'#757575', fontSize:'16px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%'}}>3분 후 도착예정</h2>
            <img style={{position:'absolute', width:'48px', height:'48px', top:'114px', left:'20px'}} 
            src={`${process.env.PUBLIC_URL}/image/ImageGuest.png`}/>
            <p style={{position:'absolute', top:'114px', left:'80px', fontSize:'16px', fontWeight:700, lineHeight:'150%', color:'#1C1C1C'}}>{props.guest.nickname} 동승자</p>
            <p style={{position:'absolute', top:'144px', left:'80px', fontSize:'14px', fontWeight:400, lineHeight:'150%', color:'#757575'}}>Drive Agora {props.guest.before}회</p>
            <img src={`${process.env.PUBLIC_URL}/image/ButtonShare.png`} style={{position:'absolute', width:'48px', height:'48px', top:'115px', right:'20px'}} />
        </div>
        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#C4C4C4', justifyContent:'center', color:'#757575'}}
            onClick={() => { }} disabled={true} >
                <p style={{ top:'16px', height:'20px',  wordWrap: 'break-word', textAlign: 'center', color: '#757575', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>운전에 집중해주세요</p>
        </button>
    </div>
    );
}