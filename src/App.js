import React, { useEffect, useState } from 'react';
import {SelectField} from './components/SelectField/SelectField';
import {History} from './components/History/History';
import {ButtonComp} from './components/Button/Button';
import Box from '@material-ui/core/Box';
import { Fields } from './components/Fields/Fields';
import styles from './App.module.css';
import axios from 'axios';
import {URL} from './api/apiUrl';

function App() {
  const [modes, setMode] = useState([]);
  const [size, setSize] = useState(0);
  const [fieldSize, setFieldSize] = useState(0);
  const [history, setHistory] = useState([]);

  // const testApi = {
  //   "easyMode": {
  //     "field": 5
  //   },
  //   "normalMode": {
  //     "field": 10
  //   },
  //   "hardMode": {
  //     "field": 15
  //   }
  // };
 
  useEffect(() => { 
    axios.get(URL)
      .then(res => {
        setMode(res.data);
      })
  },[])

  const getSize = (val) => setSize(val);
  
  const handleCLick = () => setFieldSize(size);
  
  const handleCellHover = ({row, col}) => {
    const tempMsg = `row ${row} col ${col}`;
    setHistory(prev => [tempMsg, ...prev]);
  }

  return (
    <div >
      <Box p = {10} className = {styles.boxContainer}>
        <section>
          <div className = {styles.chooseBar}>
            <SelectField getSize = {getSize} modes = {modes}/>
            <ButtonComp clickEvent = {handleCLick}/>
          </div>
          <Fields fieldSize = {fieldSize} onCellHover = {handleCellHover}/>
        </section>
        <aside className = {styles.historyBlock}>
          <History historyMsg = {history}/>
        </aside>  
      </Box> 
    </div>
  );
}

export default App;