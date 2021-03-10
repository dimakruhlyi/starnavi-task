import React, { useEffect, useState } from 'react';
import {SelectField} from './components/SelectField';
import {History} from './components/History';
import {ButtonComp} from './components/Button';
import { Box, CircularProgress, Card, Typography, CardContent } from '@material-ui/core';
import { Fields } from './components/Fields';
import styles from './App.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {getModes} from './store/actions/modesActions';

function App() {
  const [size, setSize] = useState(0);
  const [fieldSize, setFieldSize] = useState(0);
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch()
  const { loading, error, modes } = useSelector(state => state.modesList)
 
  useEffect(() => { 

    dispatch(getModes())

  },[dispatch])

  const getSize = (val) => setSize(val);
  
  const handleCLick = () => setFieldSize(size);
  
  const handleCellHover = ({row, col}) => {
    const tempMsg = `row ${row} col ${col}`;
    setHistory(prev => [tempMsg, ...prev]);
  }
  
  if (loading) {
    return (
      <CircularProgress />
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {error.message}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
    {   modes &&   
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
      </Box> }
    </>
  );
}

export default App;