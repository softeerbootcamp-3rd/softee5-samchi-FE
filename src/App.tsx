import './App.css';
import {useState} from 'react';
import './defaultStyle.css'
import { TopicPicker } from './pages/TopicPicker';
import { TestBottomSheet } from './pages/Test/TestBottomSheet';
import Page from './Page';
import { MapPinPicker } from './MapPinPicker';

function App() {

  const [pageEnd, setPageEnd] = useState<boolean>(false);

  console.log(pageEnd);
  /*
  return (
    <MapPinPicker></MapPinPicker>
  )
  */

  return (
    <div className="App" style={{width:'100vw', height:'100vh'}}>
      <header className="App-header">
      </header>
      <div className='App-fullpage' >
        <div>
          <Page end={pageEnd} setEnd={setPageEnd}>
            <TopicPicker></TopicPicker>
            <TestBottomSheet></TestBottomSheet>
            <MapPinPicker></MapPinPicker>
          </Page>
        </div>
      </div>
    </div>
  );
}

export default App;