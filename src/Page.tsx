import React, {useState} from "react";
import { NormalButton } from "./NormalButton";
import pageStyle from './page.css'
import { SlArrowLeft } from "react-icons/sl";

interface PageProps {
    setEnd:React.Dispatch<React.SetStateAction<boolean>>,
    headerElement?:JSX.Element,
    footerElement?:JSX.Element,
    children:Array<React.ReactNode>,
}


const Page = (props:PageProps) => {
    // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [aniPlaying, setAniPlaying] = useState<boolean>(false);
    let prevPage = 0;
    

    if(props.children[currentPage] === undefined) props.setEnd(true);

    if(currentPage < props.children.length)
        return (
        <article className='page-full' style={pageStyle}>
            <header className='page-header page-header-screen'>
                <div title='ProgressBar'/>
                {props.headerElement}
            </header>
            <div className='page-underheader' style={pageStyle}>
                <section className='page-body' style={pageStyle}>
                    <div className='page-getin'>
                        {props.children[currentPage]}
                    </div>
                </section>
                <footer className='page-footer page-footer-screen'>
                    {props.footerElement}
                    <NormalButton className='page-footer-btn page-footer-btn-next-single' onClicked={()=>setCurrentPage(currentPage + 1)} text={"다음"} style={{width:"84%"}} disabled={aniPlaying}></NormalButton>
                </footer>
            </div>
        </article>
        );
    else
        return (<></>);
  };
  
  export default Page;