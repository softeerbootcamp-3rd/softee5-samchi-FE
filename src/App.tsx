import './App.css';
import {useState} from 'react';
import './defaultStyle.css'
import { CheckBox } from './Checkbox';
import { TestRadioButton } from './pages/TestRadioButton';
import { TestBottomSheet } from './pages/TestBottomSheet';
import Page from './Page';

function App() {

  const [pageEnd, setPageEnd] = useState<boolean>(false);

  console.log(pageEnd);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='App-fullpage'>
        <li style={{marginTop:"10vh"}}>
          {!pageEnd ? 
          <Page setEnd={setPageEnd}>
            <TestBottomSheet/>
            <TestRadioButton></TestRadioButton>
          </Page>
          :
          <></>
        }
        </li>
      </div>
    </div>
  );
}

export default App;