import { useState } from "react";
import { BottomSheetWrapper } from "./BottomSheetWrapper";
//import {PinDriverGoal, PinGuestDefault, PinGuestSelected, PinDriverSelected} from './image/Svg'
import { SheetPage } from "./SheetPage";

type PinMarker = {
    dest:string;
    uid:number;
    nickname:string;
    topic:number[];
    start:{x:number, y:number};
    expire:Date;
}

var pin : PinMarker[] = [
    {dest:'a', uid:1, nickname:"sta", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:2, nickname:"like670220", topic:[1,7,10], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:3, nickname:"kdi", topic:[1,3,5], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:4, nickname:"신의한방리틀보이팻맨", topic:[2,5], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:5, nickname:"maintain", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:6, nickname:"fdcgolf", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:7, nickname:"에이스", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:8, nickname:"물꽃테란", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:9, nickname:"서크라테스", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
    {dest:'a', uid:10, nickname:"kon", topic:[1], start:{x:35, y:47}, expire:new Date('2024/02/28')},
]

export const MapPinPicker = ()=>{
    //const position = {lat: 37.493397679819594, lng:127.0142566444263};
    //const [selected, setSelected] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [bottomEnd, setBottomEnd] = useState<boolean>(false);   

    return (
        <div style={{height:'100vh', width:"100vw"}}>
            <button></button>
            <BottomSheetWrapper open={open} setOpen={setOpen}>
                <SheetPage end={bottomEnd} setEnd={setBottomEnd} style={{height:'20vh'}}>
                    <div>
                        <img src={process.env.PUBLIC_URL+'/image/ImageCar.png'} style={{}} alt=''></img><br/>
                    </div>
                    <h1> is destination</h1>
                </SheetPage>
            </BottomSheetWrapper>
        </div>
    )
};