import './App.css';
import {useEffect, useState} from 'react';
import './defaultStyle.css'
import { TopicPicker } from './pages/TopicPicker';
import { MapPinPicker } from './MapPinPicker';
import { RulePicker } from './pages/RulePicker'
import { GPS, Driver, Guest, User } from './Types';
import { AddressPicker } from './pages/AddressPicker';
import { TimePicker } from './pages/TimePicker';
import { DriverConfirm } from './pages/DriverConfirm';
import { DriverWait } from './pages/DriverWait';
import { Matched } from './pages/Matched';
import { Aggrement } from './pages/Aggrement';
import { HostWaiting } from './pages/HostWaitng';
import { Driving } from './pages/Driving';
import { AfterDrive } from './pages/AfterDrive';
import { Summary } from './pages/Summary';
import { SelectDriver } from './pages/SelectDriver';
import { Splash } from './pages/Splash';
import { ShowDriverInfo } from './pages/ShowDriverInfo';
import { GuestWait } from './pages/GuestWait';
import { GuestGoing } from './pages/GuestGoing';
import { getTopics, getRandomTopic, getAllDriverMarkers, 
  getFilteredDriverMarkers, getDriverDetailInfo, registerDriveChat, registerUser,
  driveChatApplicationCheck, checkApplicationAccept, applicationDriveChat, 
  converstationSummary, confirmMatching, doReview } from './apis/apis';


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
  const [time, setTime] = useState<Date>(new Date());
  const [confirm, setConfirm] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);
  const [wait, setWait] = useState<number>(0);
  const [guest, setGuest] = useState<Guest>({uid:1, nickname:'이이잉', before:100, topic:[1, 4, 5], phone:'010-1234-5678', end:''});
  const [driver, setDriver] = useState<Driver>({uid:0, nickname:'애애앵', before:20, topic:[1,5,6], start:'어딘가', end:'저긴가', expire:new Date('2024-2-2')});
  const [user, setUser] = useState<User>({uid:-1, before:-1, topic:[], nickname:''});
  const [topicList, setTopicList] = useState<string[]>([]);
  useEffect(()=>{
    
  }, [user, selectedRole, selectedTopic, currentAddress, time, guest, driver])
  
  const getPage = () => {
    switch(currentPage){
      case 0: return <Splash setUser={setUser} page={currentPage} setPage={setCurrentPage}></Splash>
      case 1: return <TopicPicker user={user} setUser={setUser} topicList={topicList} setTopicList={setTopicList} topicSelected={selectedTopic} setTopicSelected={setSelectedTopic} page={currentPage} setPage={setCurrentPage}></TopicPicker>;
      case 2: return <RulePicker selection={selectedRole} setSelection={setSelectedRole} page={currentPage} setPage={setCurrentPage}></RulePicker>;
      case 3: return <AddressPicker selection={currentAddress} setSelection={setCurrentAddress} page={currentPage} setPage={setCurrentPage}></AddressPicker>;
      case 4: return <TimePicker selection={time} setSelection={setTime} page={currentPage} setPage={setCurrentPage}></TimePicker>;
      case 5: return <DriverConfirm selection={confirm} setSelection={setConfirm} page={currentPage} setPage={setCurrentPage}></DriverConfirm>;
      case 6: return <DriverWait selection={wait} setSelection={setWait} page={currentPage} setPage={setCurrentPage}></DriverWait>;
      case 7: return <Matched matched={matched} setMatched={setMatched} page={currentPage} setPage={setCurrentPage}></Matched>;
      case 8: return <Aggrement page={currentPage} setPage={setCurrentPage}></Aggrement>;
      case 9: return <HostWaiting guest={guest} page={currentPage} setPage={setCurrentPage}></HostWaiting>;
      case 10: return <Driving guest={guest} page={currentPage} setPage={setCurrentPage}></Driving>;
      case 20: return <SelectDriver driver={driver} setDriver={setDriver} drivers={[]} page={currentPage} setPage={setCurrentPage}></SelectDriver>;
      case 21: return <ShowDriverInfo driver={driver} setDriver={setDriver} drivers={[]} page={currentPage} setPage={setCurrentPage}></ShowDriverInfo>;
      case 22: return <GuestWait page={currentPage} setPage={setCurrentPage}></GuestWait>;
      case 23: return <GuestGoing driver={driver} page={currentPage} setPage={setCurrentPage}></GuestGoing>;
      case 30: return <AfterDrive opposite={driver} page={currentPage} setPage={setCurrentPage}></AfterDrive>;
      case 31: return <Summary page={currentPage} setPage={setCurrentPage}></Summary>;
      default: return <p>에러: 어떻게 오셨나요?</p>
    }
  }
  


  return (
    <div className="App" style={{marginTop:'44px', marginBottom:'34px', height:'734px', width:'375px', overflow:'hidden', touchAction:'none'}}>
      <div id='StatusBar' style={{position:'absolute', top:'0px', left:'0px', width:'100vw', height:'44px', backgroundColor:'#FFF'}}></div>
      <header className="App-header" style={{width:'100%', height:'48px', backgroundColor:'#FFF'}}>
        <button style={{position:'absolute', width:'48px', height:'48px', left:'4px', color:'#4F4F4F'}}
        onClick={()=>{if(currentPage)setCurrentPage(()=>{return currentPage-1})}}>
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