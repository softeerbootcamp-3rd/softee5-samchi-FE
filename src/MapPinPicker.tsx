import { Topic, GPS } from "./Types";
import { useEffect, useState, useRef } from "react";
import {
    APIProvider,
    Map,
    useMap,
    AdvancedMarker,
    useMapsLibrary,
    
} from "@vis.gl/react-google-maps";
import { BottomSheetWrapper } from "./BottomSheetWrapper";
import type {Marker} from '@googlemaps/markerclusterer'
import {PinDriverGoal, PinGuestDefault, PinGuestSelected, PinDriverSelected} from './image/Svg'
import { SheetPage } from "./SheetPage";

type PinMarker = {
    dest:GPS;
    uid:number;
    nickname:string;
    topic:Topic|Topic[];
    start:GPS;
    expire:Date;
}

let pinData : PinMarker[] = [
    {dest:{lat:37.4875763, lng:126.99365}, uid:1, nickname:"test1", topic:'Any', start:{lat:37.493397679819594, lng:127.0142566444263}, expire:new Date("2024/02/27")},
    {dest:{lat:37.484918, lng:127.01629}, uid:2, nickname:"test2", topic:'문화', start:{lat:37.493902, lng:127.014395}, expire:new Date("2024/02/27")},
    {dest:{lat:37.484557, lng:127.034022}, uid:3, nickname:"test3", topic:'시사', start:{lat:37.497952, lng:127.027619}, expire:new Date("2024/02/27")},
]; 

/*
const getPinData = () => {
    pinData.push({dest:"", uid:1, nickname:"test", topic:'Any', location:{lat:37, lng:127}, expire:new Date("2024/02/27")})
}
*/

export const MapPinPicker = ()=>{
    const position = {lat: 37.493397679819594, lng:127.0142566444263};
    //const position = {lat: 43.64, lng:-79.41};
    const [selected, setSelected] = useState<number>(-1);
    const [open, setOpen] = useState<boolean>(false);
    const [bottomEnd, setBottomEnd] = useState<boolean>(false);
    //getPinData();
    console.log(pinData);

    useEffect(()=>
    {
        setOpen((selected !== -1));
        console.log(selected);
    }, [selected])
    return (
        <div style={{height:'100vh', width:"100vw"}}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string}>
                <div style={{height:'100vh', width:"100vw"}}> 
                    <Map zoom={10} 
                        center={position} 
                        mapId={process.env.REACT_APP_GOOGLE_MAP_ID} 
                        onClick={()=>setSelected(-1)}
                        fullscreenControl={false}
                    >
                            {pinData.map((pin, index) => 
                            (<AdvancedMarker position={pin.start} key={pin.uid} onClick={()=>setSelected(index)}>
                                {index !== selected ? PinGuestDefault : PinGuestSelected}
                            </AdvancedMarker>))}
                    </Map>
                </div>
            </APIProvider>
            <BottomSheetWrapper open={open} setOpen={setOpen}>
                <SheetPage end={bottomEnd} setEnd={setBottomEnd} style={{height:'50vh'}}>
                    <p>SomeThing Will be Here!</p>
                    <h1>??? is destination</h1>
                </SheetPage>
            </BottomSheetWrapper>
        </div>
    )
};

