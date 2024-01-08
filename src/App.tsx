import './App.css';
import {useEffect, useState} from 'react';
import './defaultStyle.css'
import { TopicPicker } from './pages/TopicPicker';
import Page from './Page';
import { MapPinPicker } from './MapPinPicker';
import { TrendPicker } from './pages/TrendPicker';
import { RulePicker } from './pages/RulePicker';
import { GPS } from './Types';

interface UserSetting{
  isGuest:boolean|null,
  topics:number[]|null,
  start:GPS|null,
  end:GPS|null,
  meetWith:string|null,
  meetUid:number|null,
  uid:number|null,
}


function App() {
  const [selection, setSelection] = useState<number>(-1);
  const [pageEnd, setPageEnd] = useState<boolean>(false);
  const [setting, setSetting] = useState<UserSetting|null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  useEffect(() => {
    
    
  }, [selection]);

  console.log(pageEnd);
  /*
  return (
    <MapPinPicker></MapPinPicker>
  )
  */
  
  const getPage = () => {
    switch(currentPage){
      case 0: return <RulePicker selection={selection} setSelection={setSelection} page={currentPage} setPage={setCurrentPage}></RulePicker>;
      case 1: return <TopicPicker></TopicPicker>;
      case 2: return <MapPinPicker></MapPinPicker>;
      //case 3: 
      default: return <></>;
    }
  }
  


  return (
    <div className="App" style={{marginTop:'44px', marginBottom:'34px', height:'734px', width:'375px'}}>
      <header className="App-header" style={{width:'100%', height:'48px'}}>
        <button style={{width:'48px', height:'48px', left:'4px'}}>
          <img src={`${process.env.PUBLIC_URL}/image/ButtonCheck.svg`} style={{width:'6px', height:'12px', left:'16px', top:'18px'}}/>
        </button>
      </header>
      <div className='App-fullpage' >
        <div>
          {getPage()}
        </div>
      </div>
    </div>
  );
}

export default App;