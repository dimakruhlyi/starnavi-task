import React, { useEffect, useState } from 'react';
import {SelectField} from './components/SelectField';
import {History} from './components/History';
import {ButtonComp} from './components/Button';
import Box from '@material-ui/core/Box';
import { Fields } from './components/Fields';
import styles from './App.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {getModes} from './store/actions/modesActions';

function App() {
  const [size, setSize] = useState(0);
  const [fieldSize, setFieldSize] = useState(0);
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch()
  const modesList = useSelector(state => state.modesList)
  const { loading, error, mds } = modesList
 
  useEffect(() => { 

    dispatch(getModes())

  },[dispatch])

  const getSize = (val) => setSize(val);
  
  const handleCLick = () => setFieldSize(size);
  
  const handleCellHover = ({row, col}) => {
    const tempMsg = `row ${row} col ${col}`;
    setHistory(prev => [tempMsg, ...prev]);
  }
  console.log('--', mds);
  return (
    <div >
      <Box p = {10} className = {styles.boxContainer}>
        <section>
          <div className = {styles.chooseBar}>
            {loading ? "Loading..." : error ? error.message : <SelectField getSize = {getSize} modes = {mds}/>}
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