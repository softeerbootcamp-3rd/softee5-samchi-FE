import { Topic, GPS } from "./Types";
import { useEffect, useState, useRef } from "react";
import {PinDriverGoal, PinGuestDefault, PinGuestSelected, PinDriverSelected} from './image/Svg'

//@ts-ignore
const {Tmapv3} = window;


const MarkerMaker = (loc:GPS, image:JSX.Element, map:any) => {
    console.log(map);
    return new Tmapv3.Marker({
        position: new Tmapv3.LatLng(loc.lat, loc.lng),
        icon:'/image/PinGuestDefault.svg',
        map: map,
    });
}

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


export const MapPinPickerTMap = ()=>{
    const position = {lat: 37.493397679819594, lng:127.0142566444263};
    var map : any;
    const pin = [];
    useEffect(() => {
        if(!map?.firstChild){
            //@ts-ignore
            map = new window.Tmapv3.Map("map_div",
            {
                center: new Tmapv3.LatLng(37.493397679819594, 127.0142566444263),
                width:"100%",
                height:"100%",
                zoom:20,
            });
            console.log(map);
            if(pin.length === 0)
            {
                console.log(map);
                pin.push(MarkerMaker(pinData[0].start, PinGuestDefault, map));
                pin.push(MarkerMaker(pinData[1].start, PinGuestDefault, map));
                pin.push(MarkerMaker(pinData[2].start, PinGuestDefault, map));
            }
        }

    }, []);




    return (
        <div style={{height:'100vh', width:"100vw"}}>
            <div id='map_div'>
            </div>
        </div>
    )
};

