import React, {useEffect, useState} from "react";
import { NormalButton } from "./NormalButton";
import pageStyle from './page.css'

interface PageProps {
    end:boolean,
    setEnd:React.Dispatch<React.SetStateAction<boolean>>,
    headerElement?:JSX.Element,
    footerElement?:JSX.Element,
    style?:React.CSSProperties,
    children:Array<React.ReactNode>,
}


export const SheetPage = (props:PageProps) => {
    // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [aniPlaying, setAniPlaying] = useState<boolean>(false);

    if(props.children[currentPage] === undefined) props.setEnd(true);
    useEffect(()=>{
        props.end && currentPage !== 0 && setCurrentPage(0);
    }, [currentPage])

    if(currentPage < props.children.length)
        return (
        <article className='sheetpage-full' style={pageStyle}>
            <div className='sheetpage-underheader' style={pageStyle}>
                <section className='sheetpage-body' style={pageStyle}>
                    <div className='sheetpage-getin'>
                        {props.children[currentPage]}
                    </div>
                </section>
                <footer className='sheetpage-footer sheetpage-footer-screen'>
                    {props.footerElement}
                    <NormalButton className='sheetpage-footer-btn sheetpage-footer-btn-next-single' onClick={()=>setCurrentPage(currentPage + 1)} text={"다음"} style={{width:"84%"}} disabled={aniPlaying}></NormalButton>
                </footer>
            </div>
        </article>
        );
    else
        return (<></>);
  };