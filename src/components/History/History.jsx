import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useStyles} from './useStyles';

export const History = ({historyMsg}) => {
    const classes = useStyles();

    return (
        <>
          <h2>History</h2>
          <List className={classes.root}>
            {historyMsg.map((el, ind) => ind < 5 &&
                        <ListItem key={'list-' + Date.now() * Math.random() * 1000} className = {classes.listItem}>
                            <ListItemText  primary={el} />
                        </ListItem>  
                )}
          </List>
        </>
    )
}