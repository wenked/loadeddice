import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getOddsOfDesiredChamps, loadedDiceOdds } from '../utils/getOdds';
import Paper from '@material-ui/core/Paper';
import './OddsTable.css'
import { Button } from '@material-ui/core';


const convertNumber = (num:Number) => {
    return `${((Number(num) * 100).toFixed(1))}%`
}


const useStyles = makeStyles({
    root:{
        color:'#4caf50'
    },
    teste: {
        color:'#ff5722'
    },
    table: {
      fontWeight:'bold',
    },
  
  });



interface oddsTableProps {
    odds: loadedDiceOdds[]
    setOdds: React.Dispatch<React.SetStateAction<loadedDiceOdds[] | undefined>>
}

//https://rerollcdn.com/characters/Skin/4.5/Kayle.png//

const OddsTable:React.FC<oddsTableProps> = ({odds,setOdds}) => {
    const classes = useStyles();


    return <div>
        <TableContainer component={Paper}>
            <Table size='small' className={classes.table} aria-label="a dense table">
                <TableHead>
                    <TableRow >
                        <TableCell className={classes.table}>Champion</TableCell>
                        <TableCell align="right"  className={classes.table}>Level 1</TableCell>
                        <TableCell align="right" className={classes.table}>Level 2</TableCell>
                        <TableCell align="right" className={classes.table}>Level 3</TableCell>
                        <TableCell align="right" className={classes.table}>Level 4</TableCell>
                        <TableCell align="right" className={classes.table}>Level 5</TableCell>
                        <TableCell align="right" className={classes.table}>Level 6</TableCell>
                        <TableCell align="right" className={classes.table}>Level 7</TableCell>
                        <TableCell align="right" className={classes.table}>Level 8</TableCell>
                        <TableCell align="right" className={classes.table}>Level 9</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {odds.map((champion,i) => (
                        <TableRow key={i}>
                              <TableCell component="th" scope="row">
                              <Button variant='text' onClick={() =>setOdds(getOddsOfDesiredChamps(champion.champion)) }>
                                <img src={`https://rerollcdn.com/characters/Skin/4.5/${champion.champion.replace(/\s/g, '')}.png`}alt='champion icon'/>
                                <div className='champName'>{champion.champion}</div>
                                </Button>
                                </TableCell>
                                <TableCell className={champion.level_1 >= 0.1 ? classes.root : classes.teste} align="right">{convertNumber(champion.level_1)}</TableCell>
                                <TableCell className={champion.level_2 >= 0.1 ? classes.root : classes.teste}align="right">{convertNumber(champion.level_2)}</TableCell>
                                <TableCell  className={champion.level_3 >= 0.1 ? classes.root : classes.teste}align="right">{convertNumber(champion.level_3)}</TableCell>
                                <TableCell className={champion.level_4 >= 0.1 ? classes.root : classes.teste} align="right">{convertNumber(champion.level_4)}</TableCell>
                                <TableCell className={champion.level_5 >= 0.1 ? classes.root : classes.teste}align="right">{convertNumber(champion.level_5)}</TableCell>
                                <TableCell className={champion.level_6 >= 0.1 ? classes.root : classes.teste}align="right">{convertNumber(champion.level_6)}</TableCell>
                                <TableCell className={champion.level_7 >= 0.1 ? classes.root : classes.teste} align="right">{convertNumber(champion.level_7)}</TableCell>
                                <TableCell className={champion.level_8 >= 0.1 ? classes.root : classes.teste}align="right">{convertNumber(champion.level_8)}</TableCell>
                                <TableCell  className={champion.level_9 >= 0.1 ? classes.root : classes.teste} align="right">{convertNumber(champion.level_9)}</TableCell>
                                
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}



export default OddsTable;