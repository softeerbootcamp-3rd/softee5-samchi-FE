import React, {useState, useEffect} from "react";
import { NormalButton } from "./NormalButton";

interface PageProps {
    setEnd:React.Dispatch<React.SetStateAction<boolean>>,
    headerElement?:JSX.Element,
    footerElement?:JSX.Element,
    children:React.ReactNode[],
}


const Page = (props:PageProps) => {
    // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPageArray, setTotalPageArray] = useState([]);
    console.log(props.children);
    console.log(currentPage);
    console.log(props.children[currentPage]);
    if(props.children[currentPage] === undefined) props.setEnd(true);

    return (
      <article className='page-full'>
        <header className='page-header'>
            <div title='ProgressBar'/>
            {props.headerElement}
        </header>
        <section className='page-body'>
            {props.children[currentPage]}
        </section>
        <footer className='page-footer'>
            {props.footerElement}
            <NormalButton onClicked={()=>setCurrentPage(currentPage + 1)} text={"다음"}></NormalButton>
        </footer>
      </article>
    );
  };
  
  export default Page;