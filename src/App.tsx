import './App.css';
import {useEffect, useState} from 'react';
import './defaultStyle.css'
import { TopicPicker } from './pages/TopicPicker';
import Page from './Page';
import { MapPinPicker } from './MapPinPicker';
import { TrendPicker } from './pages/TrendPicker';
import { RulePicker } from './pages/RulePicker';
import { GPS } from './Types';
import { getTopics, getRandomTopic, getAllDriverMarkers, getFilteredDriverMarkers, getDriverDetailInfo, registerDriveChat, registerUser } from './apis/apis';

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
  const [selectedRole, setSelectedRole] = useState<number>(-1);
  const [selectedTopic, setSelectedTopic] = useState<boolean[]>([]);
  const [pageEnd, setPageEnd] = useState<boolean>(false);
  const [setting, setSetting] = useState<UserSetting|null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  useEffect(() => {
    // getRandomTopic(1);
    // getAllDriverMarkers();
    // getFilteredDriverMarkers(2);
    // getDriverDetailInfo(1, 3);

    // const data = {
    //   userType: "DRIVER",
    //   topicIds: [1],
    //   destinationAddress: "qqq",
    //   estimateStartTime: "2024-01-11T16:45:31"
    // };
    // registerDriveChat(data, 1);

    const data = {
      username: "집에가고싶어라"
    }
    registerUser(data);
    
  }, [selectedRole]);

  console.log(pageEnd);
  /*
  return (
    <MapPinPicker></MapPinPicker>
  )
  */
  
  const getPage = () => {
    switch(currentPage){
      case 0: return <RulePicker selection={selectedRole} setSelection={setSelectedRole} page={currentPage} setPage={setCurrentPage}></RulePicker>;
      case 1: return <TopicPicker selection={selectedTopic} setSelection={setSelectedTopic} page={currentPage} setPage={setCurrentPage}></TopicPicker>;
      case 2: return <MapPinPicker></MapPinPicker>;
      //case 3: 
      default: return <></>;
    }
  }
  


  return (
    <div className="App" style={{marginTop:'44px', marginBottom:'34px', height:'734px', width:'375px'}}>
      <header className="App-header" style={{width:'100%', height:'48px'}}>
        <button style={{position:'absolute', width:'48px', height:'48px', left:'4px', color:'#4F4F4F'}}>
          <img src={`${process.env.PUBLIC_URL}/image/ButtonCheck.svg`} style={{position:'absolute', width:'6px', height:'12px', left:'20px', top:'62px'}}/>
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