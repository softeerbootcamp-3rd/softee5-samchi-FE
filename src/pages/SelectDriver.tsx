import { Driver, Props } from "../Types";

interface SelectDriverProps extends Props{
    driver:Driver,
    setDriver:React.Dispatch<React.SetStateAction<Driver>>,
    drivers:Driver[],
    //left:number[],
    //setLeft:React.Dispatch<React.SetStateAction<number[]>>,
}
export const SelectDriver = (props: SelectDriverProps) => { 

    return (
    <div id='SelectDriver'>
        <img src={`${process.env.PUBLIC_URL}/image/MapHostWaitingCut.png`}
        style={{position:'absolute', height:'812px', width:'375px', top:'0px', left:'0px', zIndex:-1}} />

            <button  onClick={()=>{props.setPage(21)}} style={{position:'absolute', width:'42px', height:'42px', top:'300px', left:'300px'}}>
                <img src={`${process.env.PUBLIC_URL}/image/PinNotSame.png`}/>
            </button>
            <button onClick={()=>{props.setPage(21)}}>
                <img src={`${process.env.PUBLIC_URL}/image/PinSame.png`}/>
            </button>

        <div id='remocon' 
        style={{position:'absolute', top:'582px', left:'299px', width:'56px', height:'160px', padding:'8px', backgroundColor:'#FFF', boxShadow:'0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius:'32px', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', gap:'12px', display:'inline-flex'}}>
            <button>
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