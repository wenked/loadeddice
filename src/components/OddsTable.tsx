import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { loadedDiceOdds } from '../utils/getOdds';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

interface oddsTableProps {
    odds: loadedDiceOdds[]
}



const OddsTable:React.FC<oddsTableProps> = ({odds}) => {
    const classes = useStyles();

    return <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Champion</TableCell>
                        <TableCell align="right">Level 1</TableCell>
                        <TableCell align="right">Level 2</TableCell>
                        <TableCell align="right">Level 3</TableCell>
                        <TableCell align="right">Level 4</TableCell>
                        <TableCell align="right">Level 5</TableCell>
                        <TableCell align="right">Level 6</TableCell>
                        <TableCell align="right">Level 7</TableCell>
                        <TableCell align="right">Level 8</TableCell>
                        <TableCell align="right">Level 9</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {odds.map((champion,i) => (
                        <TableRow key={i}>
                              <TableCell component="th" scope="row">
                                {champion.champion}
                                </TableCell>
                                <TableCell align="right">{champion.level_1.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_2.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_3.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_4.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_5.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_6.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_7.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_8.toFixed(3)}</TableCell>
                                <TableCell align="right">{champion.level_9.toFixed(3)}</TableCell>
                                
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}


export default OddsTable;