import React from "react";
import { Props } from "../Types";

interface AddressPickerProps extends Props{
    selection:string,
    setSelection:React.Dispatch<React.SetStateAction<string>>,
}
export const AddressPicker = (props: AddressPickerProps) => { 
    return (
    <div>
        <img src={`${process.env.PUBLIC_URL}/image/MarkerBlue.png`} style={{position:'absolute', top:'57px', left:'91px'}}></img>
        <button style={{position:'absolute', top:'57px', left:'112px', width:'146px', height:'21px', }}>
            <a style={{fontSize:'14px', fontStyle:'normal', fontWeight:'400', lineHeight:'150%', letterSpacing:'-0.25px'}}>서울 서초구 반포대로 30길</a>
        </button>
        <img src={`${process.env.PUBLIC_URL}/image/ButtonArrowDown.png`} style={{position:'absolute', top:'57px', left:'260px'}}></img>
        <input type='text'  
        style={{position:'absolute', left:'20px', top:'108px', width:'335px', height:'44px', backgroundImage:`${process.env.PUBLIC_URL}/image/SearchbarAddress.png`, backgroundRepeat:'no-repeat'}}>
        </input>
        <button style={{position:'absolute', left:'20px', top:'168px', width:'86px', height:'36px'}} onClick={()=>{props.setSelection('현대자동차 본사')}} >
            <img src={`${process.env.PUBLIC_URL}/image/ButtonHome.png`}/>
        </button>
        <button style={{position:'absolute', left:'115px', top:'168px', width:'86px', height:'36px'}} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/ButtonCompany.png`}/>
        </button>
        <button style={{position:'absolute', left:'196px', top:'168px', width:'86px', height:'36px'}} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/ButtonSchool.png`}/>
        </button>

        <a style={{position:'absolute', top:'228px', left:'20px', width:'59px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>최근 장소</a>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'256px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/AdressListItem.png`}/>
        </button>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'322px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/AdressListItem.png`}/>
        </button>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'388px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/AdressListItem.png`}/>
        </button>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'454px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/AdressListItem.png`}/>
        </button>

        <a style={{position:'absolute', top:'552px', left:'20px', width:'59px', height:'24px', fontSize:'16px', fontStyle:'normal', fontWeight:'700', lineHeight:'150%', color:'#1C1C1C'}}>최근 경로</a>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'580px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
            <img src={`${process.env.PUBLIC_URL}/image/ListTime.png`}  />
        </button>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'646px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/ListTime.png`}  />
        </button>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'712px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/ListTime.png`}  />
        </button>
        <button style={{position:'absolute', width:'375px', height:'64px', top:'778px', }} onClick={()=>{props.setSelection('현대자동차 본사')}} >
        <img src={`${process.env.PUBLIC_URL}/image/ListTime.png`}  />
        </button>
        
        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#1C1C1C', justifyContent:'center', color:'#FFFFFF'}}
            onClick={() => {console.log(props.selection);if(props.selection.length !== 0) props.setPage(props.page + 1)}} >
                <p style={{position:'absolute', top:'16px', left:'142px', width:'51px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>선택완료</p>
        </button>
    </div>
    );
}