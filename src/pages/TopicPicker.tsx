import React, { useState, useEffect } from "react";
import {Props, User} from '../Types'
import { getTopics } from "../apis/apis";

interface TopicPickerProps extends Props{
    user:User,
    setUser:React.Dispatch<React.SetStateAction<User>>,
    topicList : string[],
    setTopicList: React.Dispatch<React.SetStateAction<string[]>>,
}


export const TopicPicker = (props:TopicPickerProps) => {

    const [topicSelected, setTopicSelected] = useState<boolean[]>(Array<boolean>(100).fill(false))

    var topicNumbers : number[] = [];
    useEffect(() => {
        var topic : string[] = [];
        getTopics().then(res=>{res.data.map((v) => {
            topic[v.topicId] = v.name;
            props.setTopicList(topic);
            //console.log(topic);
        });
        
    })
    }, [])

    useEffect(() => {
        if(topicSelected)
        topicNumbers = [];
        topicSelected.map((v, i) => {
            v && topicNumbers.push(i);
        });
    }, [topicSelected]);

    const click = () => {
        const topicString : Array<string> = topicNumbers.map(v => props.topicList[v]);
        props.setUser({
            before:props.user.before, 
            uid:props.user.uid, 
            nickname:props.user.nickname, 
            topic:[4,5,6,7,8],
            type:props.user.type,
            end:props.user.end
        });
        console.log(topicNumbers);
        props.setPage(3);
    }

    
    return (
        <div id='topic' style={{width:'100%', height:'100%'}}>
        <h1 style={{position:'absolute', width:'160px', height:'60px', left:'20px', top:'104px', fontWeight:'400', fontSize:'20px', lineHeight:'150%', letterSpacing:'-0.6px', textAlign:'left'}}>대화하고 싶은<br/>관심사를 선택하세요.</h1>
        <p style={{position:'absolute', width:'257px', height:'21px', left:'20px', top:'168px', color: '#4F4F4F', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', fontStyle:'normal', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>많이 선택할수록 다양한 사람들을 찾을 수 있어요</p>
        
        {topicSelected[0] ? 
        <button 
            style={{position:"absolute", width:'164px', height:'44px', left:'20px', top:'221px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{return false;}))}>
                <p style={{position:'absolute', top:'10px', left:'16px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>아무 주제나 좋아요 </p>
            <img style={{position:'absolute', width:'24px', height:'24px', right:'16px', top:'10px'}} src={`${process.env.PUBLIC_URL}/image/ImageDice.svg`} />
        </button>
        :
        <button 
        style={{position:"absolute", width:'164px', height:'44px', left:'20px', top:'221px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if(0 === i) return true; else return false;}))}>
            <p style={{position:'absolute', top:'10px', left:'16px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>아무 주제나 좋아요 </p>
        <img style={{position:'absolute', width:'24px', height:'24px', right:'16px', top:'10px'}} src={`${process.env.PUBLIC_URL}/image/ImageDice.svg`} />
            
        </button>
        }

        {topicSelected[1] ? 
        <button 
            style={{position:"absolute", height:'36px', left:'20px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (1 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[1]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'20px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (1 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[1]}</p>
        </button>
        }

        {topicSelected[2] ? 
        <button 
            style={{position:"absolute", height:'36px', left:'79px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (2 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[2]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'79px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (2 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[2]}</p>
        </button>
        }

        {topicSelected[3] ? 
        <button 
            style={{position:"absolute",height:'36px', left:'151px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (3 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{height:'21px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[3]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'151px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (3 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{ height:'21px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[3]}</p>
        </button>
        }

        {topicSelected[4] ? 
        <button 
            style={{position:"absolute", height:'36px', left:'223px', top:'317px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (4 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{ height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[4]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'223px', top:'317px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (4 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[4]}</p>
        </button>
        }

        {topicSelected[5] ? 
        <button 
            style={{position:"absolute", height:'36px', left:'20px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (5 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{ height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[5]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'20px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (5 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[5]}</p>
        </button>
        }

        {topicSelected[6]? 
        <button 
            style={{position:"absolute", height:'36px', left:'104px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (6 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{ height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[6]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'104px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (6 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[6]}</p>
        </button>
        }

        {topicSelected[7]? 
        <button 
            style={{position:"absolute", height:'36px', left:'215px', top:'360px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (7 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[7]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'215px', top:'360px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (7 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[7]}</p>
        </button>
        }

        {topicSelected[8] ? 
        <button 
            style={{position:"absolute", height:'36px', left:'20px', top:'403px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (8 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[8]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'20px', top:'403px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (8 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[8]}</p>
        </button>
        }

        {topicSelected[8] ? 
        <button 
            style={{position:"absolute", height:'36px', left:'20px', top:'403px', padding:'8px 20px', background: '#1C1C1C', borderRadius: '8px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
            onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (8 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
                <p style={{height:'20px', top:'8px', left:'20px', color: '#FFFFFF', fontStyle:'normal', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight: '20px', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[8]}</p>
        </button>
        :
        <button 
        style={{position:"absolute", height:'37px', left:'20px', top:'403px', padding:'8px 20px', background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px #D6D6D6 solid', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}
        onClick={()=>setTopicSelected(topicSelected.map((v, i)=>{if (8 === i) {return !v;} else {if(0 === i) return false; return v;}}))}>
            <p style={{height:'20px', top:'8px', left:'20px', color: '#757575', fontSize: '14px', fontFamily: 'Pretendard', fontWeight: '400', lineHeight: '150%', letterSpacing:'-0.25px', wordWrap: 'break-word'}}>{props.topicList[8]}</p>
        </button>
        }

        <button 
            style={{position:'absolute', top:'722px', width:'335px', height:'56px', left:'20px', right:'20px', bottom:'34px', borderRadius: '16px', backgroundColor:'#3885F8', justifyContent:'center', color:'#FFFFFF'}}
            onClick={click}>
                <p style={{position:'absolute', top:'16px', left:'142px', width:'51px', height:'20px', wordWrap: 'break-word', textAlign: 'center', color: 'white', fontSize:'14px', fontFamily: 'Pretendard', fontWeight: '700', lineHeight:'20px', letterSpacing:'-0.25px'}}>선택완료</p>
        </button>
        </div>
    );
}