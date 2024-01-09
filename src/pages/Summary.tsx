import React from "react";
import { Props } from "../Types";

interface SummaryProps extends Props{
}
export const Summary = (props: SummaryProps) => { 
    return (
    <div id='summary'>
        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapHalf.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div id='Sheet' style={{position:'absolute', bottom:'0px', left:'0px', width:'375px', height:'694px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <a style={{position:'absolute', left:'20px', top:'48px', color: '#757575', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>2024. 01. 10 (수) 오후 7:00 | 1시간 12분 24초</a>
            <h2 style={{position:'absolute', left:'20px', top:'48px', fontWeight:'700', fontSize:'20px', color:'#1C1C1C'}}>요약 내용</h2>
            
            <div style={{position:'absolute', top:'163px', left:'20px', width:'335px', height:'223px', padding: 16, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D6D6D6 solid', }}>
                <a style={{position:'absolute', top:'-80px', left:'20px', alignSelf: 'stretch', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word'}}>주제1. 자율주행차와 AI 윤리: 도덕적 의사 결정과 책임 공유</a>
                <a style={{position:'absolute', top:'-60px', left:'20px', alignSelf: 'stretch', color: '#757575', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}>00:03:12 ~ 00:32:37</a>
                <a style={{position:'absolute', top:'-40px', left:'20px', height:'', alignSelf: 'stretch', color: '#4F4F4F', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>송해성 운전자님은 자율주행 차에 대하여 ‘아직은 걱정되는 부분이 많다’는 의견을 피력했어요. 그 이유는 ‘안전에 대한 신뢰성’이 아직 부족하다고 말씀하셨어요. 반면 유현아 동승자님은 ‘그래도 소프트웨어 기술을 믿고 타보고 싶다’는 의견을 말씀하셨어요. 특히 ‘자율주행 관련 법률의 현위치’에 대한 정보를 유현아 동승자님께서 자세히 설명해주셔서 운전자님께 도움이 되었어요.</a>
            </div>

            <div style={{position:'absolute', top:'402px', left:'20px', width: 335, height: 181, padding: 16, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D6D6D6 solid', }}>
                <a style={{position:'absolute', top:'402px', left:'20px', alignSelf: 'stretch', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word'}}>주제2. 선호하는 OTT 플랫폼과 선택 이유</a>
                <a style={{alignSelf: 'stretch', color: '#757575', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}>00:03:12 ~ 1:02:54</a>
                <a style={{alignSelf: 'stretch', color: '#4F4F4F', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '400', lineHeight: 21, wordWrap: 'break-word'}}>유현아 동승자님은 요즘 쿠팡플레이의 UI가 직관적이고 익숙해 편하다고 말씀하셨고, 송해성 운전자님은 그래도 여전히 넷플릭스가 익숙하다고 말씀하셨어요. 그리고 서로 추천하는 컨텐츠에 대한 이야기를 자유롭게 나누셨어요.</a>
            </div>

        </div>

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#3885F8'}}
            onClick={() => {props.setPage(1)}} >
                <p style={{position:'absolute', top:'17px', left:'134px', width:'73px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>메인으로 이동</p>
        </button>
    </div>
    );
}