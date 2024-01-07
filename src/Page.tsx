import React, {useEffect, useState} from "react";
import { NormalButton } from "./NormalButton";
import pageStyle from './page.css'
import { SlArrowLeft } from "react-icons/sl";

interface PageProps {
    end:boolean,
    setEnd:React.Dispatch<React.SetStateAction<boolean>>,
    headerElement?:JSX.Element,
    footerElement?:JSX.Element,
    style?:React.CSSProperties,
    children:Array<React.ReactNode>,
}


const Page = (props:PageProps) => {
    // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [aniPlaying, setAniPlaying] = useState<boolean>(false);

    if(props.children[currentPage] === undefined) props.setEnd(true);
    useEffect(()=>{
        props.end && currentPage !== 0 && setCurrentPage(0);
    })

    if(currentPage < props.children.length)
        return (
    <div style={{width:"90hw"}}>
        <article className='page-full' style={pageStyle}>
            <header className='page-header page-header-screen' style={pageStyle}>
                {currentPage !== 0 ? 
                <button style={{position:'fixed', left:'10vw', top:'7vh'}}
                onClick={()=>setCurrentPage(currentPage - 1)}>
                    <SlArrowLeft ></SlArrowLeft>
                </button>
                 : 
                 <></>
                }
                <div title='ProgressBar'/>
                {props.headerElement}
            </header>
            <div className='page-underheader' style={pageStyle}>
                <section className='page-body' style={pageStyle}>
                    <div className='page-getin'>
                        {props.children[currentPage]}
                    </div>
                </section>
            </div>
            <footer className='page-footer page-footer-screen'>
                    {props.footerElement}
                    <NormalButton className='page-footer-btn page-footer-btn-next-single' onClick={()=>setCurrentPage(currentPage + 1)} text={"다음"} style={{width:"84%"}} disabled={aniPlaying}></NormalButton>
                </footer>
        </article>
        </div>
        );
    else
        return (<></>);
  };
  
  export default Page;