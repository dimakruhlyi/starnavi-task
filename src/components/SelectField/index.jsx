import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles} from './useStyles';

export const SelectField = ({modes, getSize}) => {
    const classes = useStyles();
    const [size, setSize] = useState(0);
    const valuesArr = Object.values(modes).map(each => each.field);

    const handleChange = (event) => {
        getSize(event.target.value)
        setSize(event.target.value); 
    };
    
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Pick mode</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={size}
          onChange={handleChange}
          label="Pick mode"
          className={classes.selectField}
        >
        {Object.keys(modes).map((mode, index) => <MenuItem value={valuesArr[index]} key = {mode + Date.now()}>{mode}</MenuItem>)}
        </Select>
      </FormControl>
    )
}