import { useEffect, useState } from "react";
import { Driver, Props, User } from "../Types";
import {getAllDriverMarkers, getDriverDetailInfo, getFilteredDriverMarkers} from '../apis/apis'

interface SelectDriverProps extends Props{
    user:User
    setDriver:React.Dispatch<React.SetStateAction<Driver>>,
}
export const SelectDriver = (props: SelectDriverProps) => { 

    const [newPin, setNewPin] = useState<number>(0);
    const [newInterestedPin, setNewInterestedNewPin] = useState<number>(0);
    var pinList : number[] = [];
    var interestPinList : number[] = [];
    var seled : Driver[] = []
    var pinx:number[] = Array<number>(20), piny:number[] = Array<number>(20);
    pinx = pinx.map((v) => Math.floor(Math.random() * 300)+40)

    useEffect(() => {refresh()}, [])

    const refresh = () => {
        getAllDriverMarkers().then((res) => {
            console.log('All : ' + res);
            pinList = res.data.markerIdList.sort();
            console.log('All saved : ' + pinList);
            /*
            pinList.map(v=>
                getDriverDetailInfo(props.user.uid, v).then((res) => {
                    console.log(res.data);
                }));
                */
            setNewPin(()=>newPin + 1);
            }).catch(err => console.log('Error on All - ' + err));

        getFilteredDriverMarkers(props.user.uid).then((res) => {
            console.log('Filtered : ' + res);
            interestPinList = res.data.filter((v) => {return v.isRelated;})
                                        .map((v) => {return v.markerId}).sort();
            console.log('All saved : ' + interestPinList);
            setNewInterestedNewPin(()=>newInterestedPin + 1);
            console.log(newInterestedPin)
            }).catch(err => console.log('Error on Filtered - ' + err));
    }

    const pinClick = (driverID : number) =>{
        if(seled[driverID] === undefined){
        getDriverDetailInfo(props.user.uid, driverID).then((res) => {
            console.log(res.data);
            var driv = {
                did:driverID,
                uid:-1,
                topic:[],
                before:res.data.driveChatCount,
                end:res.data.destination,
                type:'DRIVER',
                expire:res.data.startTime,
                nickname:res.data.driverNickname,
            };
            seled[driverID] = driv;
            props.setDriver({
                did:driverID,
                uid:-1,
                topic:[],
                before:res.data.driveChatCount,
                end:res.data.destination,
                type:'DRIVER',
                expire:res.data.startTime,
                nickname:res.data.driverNickname,
            });
            
        }).catch(err => console.log('Get Driver Detailed Info Error : ' + err));}
        else props.setDriver(seled[driverID])
        props.setPage(21);
    }

    function pins() :JSX.Element[] {
        var list : JSX.Element[]= []
        pinList.map((v) => {list.push(
        (<button  onClick={()=>{props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
        { interestPinList.filter((f) => f === v) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
        : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
    </button>))});
    console.log(list)
    return list;
    }

    return (
    <div id='SelectDriver'>
        <img src={`${process.env.PUBLIC_URL}/image/MapHostWaitingCut.png`}
        style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />
        <div id='pins'>
            {
                newPin  && pins()
            }


            {pinList.filter((f) => f === 1) && <button  onClick={()=>{pinClick(1);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 1) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
            {pinList.filter((f) => f === 2) && <button  onClick={()=>{pinClick(2);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 2) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
            {pinList.filter((f) => f === 3) && <button  onClick={()=>{pinClick(3);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 3) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
            {pinList.filter((f) => f === 4) && <button  onClick={()=>{pinClick(4);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 4) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
            {pinList.filter((f) => f === 10) && <button  onClick={()=>{pinClick(10);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 10) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
            {pinList.filter((f) => f === 11) && <button  onClick={()=>{pinClick(11);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 11) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
            {pinList.filter((f) => f === 13) && <button  onClick={()=>{pinClick(13);props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300)+40 + 'px'}`, left:`${Math.floor(Math.random() * 300)+20 + 'px'}`}}>
            { interestPinList.filter((f) => f === 13) ? <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`} />
                : <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />}
            </button>}
        </div>
        <div id='remocon' 
        style={{position:'absolute', top:'582px', left:'299px', width:'56px', height:'160px', padding:'8px', backgroundColor:'#FFF', boxShadow:'0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius:'32px', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', gap:'12px', display:'inline-flex'}}>
            <button onClick={refresh}>
                <img src={`${process.env.PUBLIC_URL}/image/ButtonRefresh.png`}/>
            </button>
            <button>
            <img src={`${process.env.PUBLIC_URL}/image/ButtonTogleNotSame.png`}/>
            </button>
            <button>
            <img src={`${process.env.PUBLIC_URL}/image/ButtonHereNotFollow.png`}/>
            </button>

        </div>
    </div>
    );
}

/**            <button  onClick={()=>{pinClick(5)}} style={{position:'absolute', width:'42px', height:'42px', top:`${Math.floor(Math.random() * 300) + 'px'}`, left:`${Math.floor(Math.random() * 300) + 'px'}`}}>
                <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`} />
            </button> */