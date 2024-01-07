import { Props, Topic, GPS } from "./Types";
import { useEffect, useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { BottomSheetWrapper } from "./BottomSheetWrapper";
import {PinDriverGoal, PinGuestDefault, PinGuestSelected} from './image/Svg'
import { SheetPage } from "./SheetPage";

type PinMarker = {
    dest:string;
    uid:number;
    nickname:string;
    topic:Topic|Topic[];
    location:GPS;
    expire:Date;
}

let pinData : PinMarker[] = [
    {dest:"목동", uid:1, nickname:"test1", topic:'Any', location:{lat:37, lng:127}, expire:new Date("2024/02/27")},
    {dest:"경주", uid:2, nickname:"test2", topic:'문화', location:{lat:36, lng:127}, expire:new Date("2024/02/27")},
    {dest:"천안", uid:3, nickname:"test3", topic:'시사', location:{lat:38, lng:127}, expire:new Date("2024/02/27")},
]; 

const getPinData = () => {
    pinData.push({dest:"", uid:1, nickname:"test", topic:'Any', location:{lat:37, lng:127}, expire:new Date("2024/02/27")})
}

export const MapPinPicker = ()=>{
    const position = {lat: 37.493397679819594, lng:127.0142566444263};
    const [selected, setSelected] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [bottomEnd, setBottomEnd] = useState<boolean>(false);
    getPinData();
    console.log(pinData);

    useEffect(()=>setOpen((selected !== 0)), [selected])
    return (
        <div style={{height:'100vh', width:"100vw"}}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string}>
                <div style={{height:'100vh', width:"100vw"}}> 
                    <Map zoom={20} center={position} mapId={process.env.REACT_APP_GOOGLE_MAP_ID} 
                        onClick={()=>setSelected(0)}>
                        {pinData.map((v, i) => (
                            <AdvancedMarker position={position} onClick={()=>setSelected(i+1)}>
                                <Pin>
                                    {selected === i+1 ? PinGuestSelected : PinGuestDefault}
                                </Pin>
                            </AdvancedMarker>
                        ))} 
                    </Map>
                </div>
            </APIProvider>
            <BottomSheetWrapper open={open} setOpen={setOpen}>
                <SheetPage end={bottomEnd} setEnd={setBottomEnd} style={{height:'50vh'}}>
                    <p>SomeThing Will be Here!</p>
                    <h1>{pinData[selected].dest} is destination</h1>
                </SheetPage>
            </BottomSheetWrapper>
        </div>
    )
};