import { Driver, Props } from "../Types";

interface ShowDriverInfoProps extends Props{
    driver:Driver,
    setDriver:React.Dispatch<React.SetStateAction<Driver>>,
    drivers:Driver[],
    //left:number[],
    //setLeft:React.Dispatch<React.SetStateAction<number[]>>,
}
export const ShowDriverInfo = (props: ShowDriverInfoProps) => { 

    return (
    <div id='ShowDriverInfo'>
        <img src={`${process.env.PUBLIC_URL}/image/MapHostWaitingCut.png`}
        style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />

            <button  onClick={()=>{props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:'300px', left:'300px'}}>
                <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`}/>
            </button>
            <button onClick={()=>{props.setPage(21)}}>
                <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`}/>
            </button>

        <div id='Sheet' style={{position:'absolute', bottom:'0vw', left:'0px', width:'100vw', height:'524px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <img style={{position:'absolute', width:'48px', height:'48px', top:'48px', left:'20px'}} 
                src={`${process.env.PUBLIC_URL}/image/ImageGuest.png`}/>
            <p style={{position:'absolute', top:'48px', left:'80px', fontSize:'16px', fontWeight:700, lineHeight:'150%', color:'#1C1C1C'}}>{props.driver.nickname} 운전자</p>
            <p style={{position:'absolute', top:'74px', left:'80px', fontSize:'14px', fontWeight:400, lineHeight:'150%', color:'#757575'}}>Drive Agora {props.driver.before}회</p>
            <img src={`${process.env.PUBLIC_URL}/image/ButtonCall.png`}style={{position:'absolute', width:'48px', height:'48px', top:'48px', right:'20px'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonUpload.png`} style={{position:'absolute', width:'48px', height:'48px', top:'48px', right:'76px'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag1.png`} style={{position:'absolute', top:'117px', left:'20px', color:'#D6D6D6'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag2.png`} style={{position:'absolute', top:'117px', left:'201px', color:'#D6D6D6'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag3.png`} style={{position:'absolute', top:'155px', left:'20px', color:'#D6D6D6'}} />
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTag4.png`} style={{position:'absolute', top:'155px', left:'164px', color:'#D6D6D6'}} />

            <img src={`${process.env.PUBLIC_URL}/image/MarkerBlue.png`} style={{position:'absolute', top:'241px', left:'20px', width:'20px', height:'20px'}}></img>

            <div style={{position:'absolute', top:'160px'}}>
                <p style={{position:'absolute', top:'48px', left:'21px', width:'42px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>목적지</p>
                <img src={`${process.env.PUBLIC_URL}/image/MarkerBlue.png`} style={{position:'absolute', top:'1px', left:'1px', width:'20px', height:'20px'}}></img>
                <p style={{position:'absolute', top:'78px', left:'47px', width:'170px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', color:'#000000'}}>07(일) 오전 8시 55분</p>
                <p style={{position:'absolute', top:'116px', left:'21px', width:'91px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>출발 예정 시간</p>
                <p style={{position:'absolute', top:'144px', left:'21px', width:'139px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', color:'#000000'}}>07(일) 오전 8시 55분</p>
                <p style={{position:'absolute', top:'184px', left:'21px', width:'91px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>관심사</p>
                <div style={{position:'absolute', top:'212px', left:'20px', width:'49px', height:'37px', fontSize:'16px', borderRadius:'8px', border:'1px solid', borderColor:'#3885F8', backgroundColor:'#FFF'}}>
                    <p style={{position:'absolute', top:'8px', left:'12px', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', color:'#3885F8'}}>금융</p>
                </div>
                <div style={{position:'absolute', top:'212px', left:'75px', width:'73px', height:'37px', fontSize:'16px', borderRadius:'8px', border:'1px solid', borderColor:'#3885F8', backgroundColor:'#FFF'}}>
                    <p style={{position:'absolute', top:'8px', left:'12px', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', color:'#3885F8'}}>사건사고</p>
                </div>
                <div style={{position:'absolute', top:'212px', left:'154px', width:'73px', height:'37px', fontSize:'16px', borderRadius:'8px', border:'1px solid', borderColor:'#3885F8', backgroundColor:'#FFF'}}>
                    <p style={{position:'absolute', top:'8px', left:'12px', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', color:'#3885F8'}}>건강정보</p>
                </div>
                <div style={{position:'absolute', top:'212px', left:'233px', width:'61px', height:'37px', fontSize:'16px', borderRadius:'8px', border:'1px solid', borderColor:'#3885F8', backgroundColor:'#FFF'}}>
                    <p style={{position:'absolute', top:'8px', left:'12px', fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', color:'#3885F8'}}>모바일</p>
                </div>

            </div>
            <button 
                style={{position:'absolute', top:'434px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', alignItems:'center', gap:'10px', display:'inline-flex'}}
                onClick={() => {props.setPage(22)}} >
                <p style={{wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', }}>탑승 요청하기</p>
            </button>
            
        </div>
    </div>
    );
}