import React, {useState} from "react";
import { CheckBox } from "../Checkbox";
import {Topics} from '../Types'

interface Props{
    style?:React.CSSProperties,
    children?:React.ReactNode,
}


export const TopicPicker = (props:Props) => {
    const [picked, setPicked] = useState<Array<boolean>>(Array<boolean>(100));

    let ind : number = 0;

    return (
        <div style={{width:"100vw", height:"100vh"}}>
            {Topics.map((v) => {
                return (
                    <>
                    <p>{v.class}</p>
                    <section title={v.class}>
                    {v.subclass.map((val) => {
                        return <CheckBox className='checkbox topic-checkbox' index={ind++} selected={picked} onSelect={setPicked} text={val} style={{margin:'1vw'}}></CheckBox>
                    })}
                    </section>
                    <br/>
                    </>
                )
            })}
        </div>
    );
}