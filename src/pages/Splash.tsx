import React from "react";
import { Props } from "../Types";

interface SplashProps extends Props{
}

export const Splash = (props : SplashProps) => {
    
    setTimeout(()=>{
        props.setPage(1);
    }, 1500);

    return(
        <div style={{width:'100%', height:'100%'}}>
            <img src={`${process.env.PUBLIC_URL}/image/LogoDriveAgora.png`}
            style={{position:'absolute', left:'18px', top:'277px'}}/>
            <img src={`${process.env.PUBLIC_URL}/image/LogoSlogun.png`}
            style={{position:'absolute', left:'18px', top:'401px'}}/>
        </div>

    );
}