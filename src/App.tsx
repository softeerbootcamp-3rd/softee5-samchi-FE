import './App.css';
import {useEffect, useState} from 'react';
import './defaultStyle.css'
import { TopicPicker } from './pages/TopicPicker';
import { MapPinPicker } from './MapPinPicker';
import { RulePicker } from './pages/RulePicker';
import { GPS, Driver, Guest, User } from './Types';
import { AddressPicker } from './pages/AddressPicker';
import { TimePicker } from './pages/TimePicker';
import { DriverConfirm } from './pages/DriverConfirm';
import { Wait } from './pages/Wait';
import { Matched } from './pages/Matched';
import { Aggrement } from './pages/Aggrement';
import { HostWaiting } from './pages/HostWaitng';
import { Driving } from './pages/Driving';
import { AfterDrive } from './pages/AfterDrive';
import { Summary } from './pages/Summary';

interface UserSetting{
  user:User
  isGuest:boolean|null,
  topics:number[]|null,
  start:GPS|null,
  end:GPS|null,
  opponent: User,
}


function App() {
  const [selectedRole, setSelectedRole] = useState<number>(-1);
  const [selectedTopic, setSelectedTopic] = useState<boolean[]>(Array<boolean>(100).fill(false));
  const [setting, setSetting] = useState<UserSetting|null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [confirm, setConfirm] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);
  const [wait, setWait] = useState<number>(0);
  const [guest, setGuest] = useState<Guest>({uid:1, nickname:'이이잉', before:100, topic:[1, 4, 5], phone:'010-1234-5678'});
  const [driver, setDriver] = useState<Driver>({uid:0, nickname:'애애앵', before:20, topic:[1,5,6], start:'어딘가', end:'저긴가', expire:new Date('2024-2-2')});


  useEffect(() => {
    //setSetting({selectedRole, selectedTopic, null, currentAddress, currentDate, })
    
  }, [currentPage]);
  /*
  return (
    <MapPinPicker></MapPinPicker>
  )
  */
  
  const getPage = () => {
    switch(currentPage){
      case 0: return <RulePicker selection={selectedRole} setSelection={setSelectedRole} page={currentPage} setPage={setCurrentPage}></RulePicker>;
      case 1: return <TopicPicker selection={selectedTopic} setSelection={setSelectedTopic} page={currentPage} setPage={setCurrentPage}></TopicPicker>;
      case 2: return <AddressPicker selection={currentAddress} setSelection={setCurrentAddress} page={currentPage} setPage={setCurrentPage}></AddressPicker>;
      case 3: return <TimePicker selection={currentDate} setSelection={setCurrentDate} page={currentPage} setPage={setCurrentPage}></TimePicker>;
      case 4: return <DriverConfirm selection={confirm} setSelection={setConfirm} page={currentPage} setPage={setCurrentPage}></DriverConfirm>;
      case 5: return <Wait selection={wait} setSelection={setWait} page={currentPage} setPage={setCurrentPage}></Wait>;
      case 6: return <Matched matched={matched} setMatched={setMatched} page={currentPage} setPage={setCurrentPage}></Matched>;
      case 7: return <Aggrement page={currentPage} setPage={setCurrentPage}></Aggrement>;
      case 8: return <HostWaiting guest={guest} page={currentPage} setPage={setCurrentPage}></HostWaiting>;
      case 9: return <Driving guest={guest} page={currentPage} setPage={setCurrentPage}></Driving>;
      case 11: return <MapPinPicker></MapPinPicker>;
      case 20: return <AfterDrive page={currentPage} setPage={setCurrentPage}></AfterDrive>;
      case 21: return <Summary page={currentPage} setPage={setCurrentPage}></Summary>;
      default: return <p>에러: 어떻게 오셨나요?</p>
    }
  }
  


  return (
    <div className="App" style={{marginTop:'44px', marginBottom:'34px', height:'734px', width:'375px', overflow:'hidden', touchAction:'none'}}>
      <div id='StatusBar' style={{position:'absolute', top:'0px', left:'0px', width:'100vw', height:'44px', backgroundColor:'#FFF'}}></div>
      <header className="App-header" style={{width:'100%', height:'48px', backgroundColor:'#FFF'}}>
        <button style={{position:'absolute', width:'48px', height:'48px', left:'4px', color:'#4F4F4F'}}
        onClick={()=>{if(currentPage)setCurrentPage(currentPage-1)}}>
          <img src={`${process.env.PUBLIC_URL}/image/ButtonBack.png`} style={{position:'absolute', width:'48px', height:'48px', left:'4px', top:'0px'}}/>
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