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
    topic:Topic;
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
    const [selected, setSelected] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [bottomEnd, setBottomEnd] = useState<boolean>(false);
    //getPinData();
    console.log(pinData);

    const fetchDrivingDirection = async (start:GPS, goal:GPS, option:{}) => {
        const url = `https://naveropenapi.apigw-pub.fin-ntruss.com/map-direction/v1/driving?start=${pinData[selected-1].start.lat},${pinData[selected-1].start.lng}&goal=${pinData[selected-1].start.lat},${pinData[selected-1].start.lng}}`;
      
        const response = await fetch(url, {
            //@ts-ignore
          headers: {
            'x-ncp-apigw-api-key-id': process.env.REACT_APP_NAVER_CLIENT_ID,
            'x-ncp-apigw-api-key': process.env.REACT_APP_NAVER_CLIENT_SECRET,
          }
        });
      
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      
        const data = await response.json();
        return data;
    };

    useEffect(()=>
    {
        setOpen((selected !== 0));
        
    }, [selected])

    useEffect(() => {

    })

    return (
        <div style={{height:'100vh', width:"100vw"}}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string}>
                <div style={{height:'100vh', width:"100vw"}}> 
                    <Map zoom={20} 
                        center={position} 
                        mapId={process.env.REACT_APP_GOOGLE_MAP_ID} 
                        onClick={()=>setSelected(0)}
                        fullscreenControl={false}
                    >
                            {pinData.map((pin, index) => 
                            (<AdvancedMarker position={pin.start} key={pin.uid} onClick={()=>setSelected(index+1)}>
                                {index+1 !== selected ? PinGuestDefault : PinGuestSelected}
                            </AdvancedMarker>))}
                    </Map>
                </div>
            </APIProvider>
            <BottomSheetWrapper open={open} setOpen={setOpen}>
                <SheetPage end={bottomEnd} setEnd={setBottomEnd} style={{height:'20vh'}}>
                    <div>
                        <img src={process.env.PUBLIC_URL+'/image/ImageCar.png'} style={{}}></img><br/>
                        <p>{pinData[selected].nickname} 운전자</p><br/>
                        <ul style={{listStyleType:"disc"}}>
                            <li><p>{pinData[selected].dest.lat}</p></li>
                            <li><p>{pinData[selected].expire.toString()}</p></li>
                            <li><p>{pinData[selected].topic}</p></li>
                        </ul>
                    </div>
                    <h1>{pinData[selected].dest.lat} is destination</h1>
                </SheetPage>
            </BottomSheetWrapper>
        </div>
    )
};



const Directions = () => {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    useEffect(() => {
        if(!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer());
        

    }, [routesLibrary, map]);

    useEffect(() => {
        if(!directionsService || !directionsRenderer) return;
        directionsService.route({
            //origin : "서울특별시 강남구 도곡1동 945-20",
            //destination : "서울특별시 강남구 강남대로 372",
            origin:"100 Front St, Toronto ON",
            destination:"500 College St, Toronto On",
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true,
        }).then(response => {
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
        });
    }, [directionsService, directionsRenderer])

    console.log(routes);

    useEffect(()=>{
        if(!directionsRenderer) return;

        directionsRenderer.setRouteIndex(routeIndex);
    },[routeIndex, directionsRenderer])

    if(!leg) return null;

    return (
    <div className='direction'>
        <h2>{selected.summary}</h2>
        <p>{leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}</p>
        <p>Distance: {leg.distance?.text}</p>
        <p>Duration: {leg.duration?.text}</p>
    </div>)
}

