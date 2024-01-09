import React, {useState} from "react";
import { CheckBox } from "../Checkbox";

type Topic = {
    class:string,
    subclass:Array<string>,
}

interface TrendProps{
    style?:React.CSSProperties,
    children?:React.ReactNode,
}

const trends:Array<string> = [
    '트렌드1', '트랜드2', '트랜드3', '트랜드4', '트랜드5', '트랜드6'
]

export const TrendPicker = (props:TrendProps) => {
    const [picked, setPicked] = useState<Array<boolean>>(Array<boolean>(100));

    let ind : number = 0;


    return (
        <div style={{width:"100vw", height:"100vh"}}>
            <p>대화하고 싶은<br/>오늘의 트렌드를 선택해주세요.</p><br/>
            {trends.map((val) => {
                return <CheckBox className='checkbox topic-checkbox' index={ind++} selected={picked} onSelect={setPicked} text={val} style={{margin:'1vw'}}></CheckBox>
            })}
        </div>
    );
}