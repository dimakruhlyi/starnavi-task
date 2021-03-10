import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from './useStyles';

export const ButtonComp = ({clickEvent}) => {
    const classes = useStyles();

    return (
        <Button 
            variant = 'contained' 
            color = 'primary'
            className = {classes.btn}
            onClick = {clickEvent}
        >Start</Button>
    )
}