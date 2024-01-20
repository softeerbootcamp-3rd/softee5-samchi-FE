import { Driver, Guest, Props } from "../Types";

interface AfterDriveProps extends Props{
    opposite:Driver|Guest
}
export const AfterDrive = (props: AfterDriveProps) => { 



    return (
    <div id='afterdrive' style={{fontWeight:'400', fontStyle:'normal', lineHeight:'150%'}}>

        <div>
        <img src={`${process.env.PUBLIC_URL}/image/MapHalf.png`} style={{position:'absolute', top:'27px', left:'0px', width:'384px', height:'407px', zIndex:'-1'}}/>
        </div>
        <div id='sheet' style={{position:'absolute', bottom:'0px', left:'0px', width:'375px', height:'754px', boxShadow:'0px 0px 32px 0px rgba(0, 0, 0, 0.12)', borderRadius:'24px 24px 0px 0px', backgroundColor:'#FFF'}}>
            <h2 style={{position:'absolute', left:'20px', top:'48px', fontWeight:'700', fontSize:'20px', color:'#1C1C1C'}}>이동이 완료되었습니다.</h2>    
            <p style={{position:'absolute', left:'20px', top:'90px', fontWeight:'700', fontSize:'14px', color:'#1C1C1C'}}>{props.opposite.end}</p>    
            <p style={{position:'absolute', left:'20px', top:'112px', fontWeight:'400', fontSize:'14px', color:'#757575'}}>{`${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`}</p>
            <button style={{position:'absolute', top:'149px', left:'20px', width: 163, height: 35, background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}
                onClick={()=>{props.setPage(31)}}>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>대화내용 요약 받기</a>
            </button>
            
            <p style={{position:'absolute', left:'20px', top:'232px', fontWeight:'400', fontSize:'16px', color:'#1C1C1C'}}>{}</p>    
            
            <button style={{position:'absolute', top:'268px', left:'20px', height:'46px', padding:'8px', background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #1B6BE2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <img src={`${process.env.PUBLIC_URL}/image/EmojiBook.png`}/>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight:'150%', wordWrap: 'break-word'}}>많은 지식을 알 수 있어요</a>
            </button>
            <button style={{position:'absolute', top:'268px', left:'191px', height:'46px', padding:'8px', background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #1B6BE2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <img src={`${process.env.PUBLIC_URL}/image/EmojiKind.png`}/>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight:'150%', wordWrap: 'break-word'}}>친절한 표현을 사용해요</a>
            </button>
            <button style={{position:'absolute', top:'326px', left:'20px', height:'46px', padding:'8px', background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #1B6BE2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <img src={`${process.env.PUBLIC_URL}/image/EmojiCloud.png`}/>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight:'150%', wordWrap: 'break-word'}}>활발한 토론이 가능해요</a>
            </button>
            <button style={{position:'absolute', top:'326px', left:'185px', height:'46px', padding:'8px', background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #1B6BE2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <img src={`${process.env.PUBLIC_URL}/image/EmojiWheel.png`}/>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight:'150%', wordWrap: 'break-word'}}>운전 실력이 좋아요</a>
            </button>
            <button style={{position:'absolute', top:'384px', left:'20px', height:'46px', padding:'8px', background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #1B6BE2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <img src={`${process.env.PUBLIC_URL}/image/EmojiHandshake.png`}/>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight:'150%', wordWrap: 'break-word'}}>다음에 또 만나고 싶어요</a>
            </button>
            <button style={{position:'absolute', top:'384px', left:'188px', height:'46px', padding:'8px', background: '#F7F7F7', borderRadius: 8, overflow: 'hidden', border: '1px #1B6BE2 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <img src={`${process.env.PUBLIC_URL}/image/EmojiClean.png`}/>
                <a style={{textAlign: 'center', color: '#4F4F4F', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', lineHeight:'150%', wordWrap: 'break-word'}}>차 환경이 만족스러워요</a>
            </button>
            




            <p style={{position:'absolute', left:'20px', top:'535px', fontWeight:'700', fontSize:'16px', color:'#1C1C1C', lineHeight:'24px'}}>감사 인사는 필수 에티켓입니다</p>    
        </div>

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {props.setPage(0)}} >
                <p style={{position:'absolute', top:'17px', left:'134px', width:'76px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>메인으로 이동</p>
        </button>
    </div>
    );
}