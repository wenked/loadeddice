import React from 'react';
import {champions} from './utils/champions'
import {getOddsOfDesiredChamps, loadedDiceOdds} from './utils/getOdds'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import OddsTable from './components/OddsTable';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiInputBase-root': {
				margin: theme.spacing(1),
				width: 400,
				[theme.breakpoints.down('sm')]: {
					width: 300,
				},
			},
		},
	})
);


const App:React.FC = () => {
 const [champs,setChamps] = React.useState<String | null>('');
 const [search, setSearch] = React.useState<String | null>('');

 const [odds,setOdds] = React.useState<loadedDiceOdds[]>()
 const classes = useStyles();

const championsNameArray = champions.map(champ => {
  return champ.name
})

const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  setChamps(search)
  if(search !== null) {
    setOdds(getOddsOfDesiredChamps(search))

    console.log(odds)
  }
 

}
const onChangeHandler = ( event: React.ChangeEvent<{}>, newValue:String | null)=> {
  setSearch(newValue);
};

  return (
    <div className='table-area'>
     <form onSubmit={handleChange}>
	<div className='searchbar-area'>
     <Autocomplete
						onChange={onChangeHandler}
						value={champs}
						id='searchbox'
						options={championsNameArray}
						getOptionSelected={(opt, val) => opt === val}
						renderInput={(params) => (
							<TextField
								{...params}
								className={classes.root}
								label='Search your item'
								variant='outlined'
								type='search'
								autoFocus
							/>
						)}
					/>
          <Button type='submit' variant='text'>Search</Button>
		</div>
     </form>


     {odds && <OddsTable  odds={odds} setOdds={setOdds}/>}

    </div>
  );
}

export default App;
