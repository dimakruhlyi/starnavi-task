import React from 'react';
import {useStyles} from './useStyles';

export const Fields = ({fieldSize, onCellHover}) => {
    const classes = useStyles();
    const iterArr = new Array(fieldSize).fill('');

    const handleMouseLeave = (e) => {
        const cell = e.target;
        if (cell.tagName.toLowerCase() !== 'td') return;
        const row = cell.parentNode.rowIndex;
        const col = cell.cellIndex;

        onCellHover({row: row + 1, col: col + 1})
    }

    return (
        <>
            <table className = {classes.table}>
                <tbody>
                    {iterArr.map((item, index) => {
                        return <tr key = {'row-' + index}>
                            {iterArr.map((it, ind) => {
                                return <td 
                                    className = {classes.td} 
                                    key = {'col-' + ind} 
                                    onMouseLeave = {handleMouseLeave}
                                >&nbsp;</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}