import React from "react";
import { Props } from "../Types";

interface DriverConfirmProps extends Props{
    selection:boolean,
    setSelection:React.Dispatch<React.SetStateAction<boolean>>,
}
export const DriverConfirm = (props: DriverConfirmProps) => { 
    return (
    <div>
        <h2 style={{position:'absolute', top:'58px', left:'center', width:'76px', height:'20px', alignItems:'center', backgroundColor:'#FFF', gap:'97px', lineHeight:'20px', fontWeight:'700',fontSize:'14px',color:'#1C1C1C', textAlign:'center'}}>최종확인</h2>
        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapSetDestDummy.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div style={{position:'absolute', top:'396px', left:'0px', width:'375px', height:'416px', boxShadow:'0px 0px 32px 0px', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <p style={{position:'absolute', top:'48px', left:'21px', width:'42px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>목적지</p>
            <img src={`${process.env.PUBLIC_URL}/image/MarkerBlue.png`} style={{position:'absolute', top:'78px', left:'21px'}}></img>
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
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {props.setSelection(true); console.log(props.selection); props.setPage(props.page + 1)}} >
                <p style={{ top:'16px', height:'20px',  wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>드라이브챗 시작하기</p>
        </button>
    </div>
    );
}