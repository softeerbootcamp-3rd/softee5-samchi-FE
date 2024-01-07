import { Props, Topic, GPS } from "./Types";
import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import { BottomSheetWrapper } from "./BottomSheetWrapper";

type PinMarker = {
    dest:string;
    uid:number;
    nickname:string;
    topic:Topic|Topic[];
    location:GPS;
}

export const MapPinPicker = ()=>{
    const position = {lat: 37.493397679819594, lng:127.0142566444263};
    const [open, setOpen] = useState(false);

    return (
        <div style={{height:'100vh', width:"100vw"}}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string}>
                <div style={{height:'100vh', width:"100vw"}}> 
                    <Map zoom={20} center={position} mapId={process.env.REACT_APP_GOOGLE_MAP_ID} 
                        onClick={()=>{}}>
                        <AdvancedMarker position={position} onClick={()=>setOpen(true)}>
                            <Pin 
                                background={"green"}
                                borderColor={"green"}
                                glyphColor={"green"}
                            />
                        </AdvancedMarker>
                    </Map>
                </div>
            </APIProvider>
        </div>
    )
};