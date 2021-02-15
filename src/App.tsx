import React from 'react';
import {Champion, champions} from './utils/champions'

import {getOddsOfDesiredChamps} from './utils/getOdds'

/* 
interface loadedDiceOdds {
  champion: String,
  level_1: Number,
  level_2: Number,
  level_3: Number,
  level_4: Number,
  level_5: Number,
  level_6: Number,
  level_7: Number,
  level_8: Number,
  level_9: Number,
}

const LevelOdds = [[1,0,0,0,0],[1,0,0,0,0],[0.75,0.25,0,0,0],[0.55,0.30,0.15,0,0],[0.45,0.33,0.20,0.02,0],[0.35,0.35,0.25,0.05,0],[0.22,0.35,0.30,0.12,0.01],[15,25,35,20,5],[10,15,30,30,15]]


const desiredChamp = champions.filter(x => x.name === 'Swain')

const getUnitsWithSameTraits = (unit: String):Champion[] => {

  const UnitWithTrait = champions.filter((champ) => 
    champ.name === unit
  )

  

  let unitswithsametrait:Champion[][] = []
  UnitWithTrait[0].traits.forEach((trait) => {
    const champs = champions.filter((x) => x.traits.includes(trait))
    
    console.log(champs)
    
    unitswithsametrait.push(champs)
    console.log(unitswithsametrait)
     
    
    
  })

  
  console.log('último console.log',_.flatten(unitswithsametrait))
  return _.uniq(_.flatten(unitswithsametrait))
}


const iterateWithChampsWithSameTrait = (ChampsWithSameTrait:Champion[],desiredChamp:Champion) => { 
  console.log('estou aqui')
  let champOddsArray: loadedDiceOdds[] = []

   ChampsWithSameTrait.forEach((champ) => {
    
    const champs =_.groupBy(getUnitsWithSameTraits(champ.name),'cost')
    console.log(champs,'champs') 
    const getCosts = Object.keys(champs)
    console.log(getCosts)
    let oddsArray:Number[] = []
    LevelOdds.forEach((level,i) => { 
      console.log('teste')
        getCosts.forEach(cost => {
        if(Number(cost) === desiredChamp.cost) {
          let champOdds:loadedDiceOdds = {
            champion:'',
            level_1:1,
            level_2:2,
            level_3:3,
            level_4:3,
            level_5:5,
            level_6:5,
            level_7:1,
            level_8:1,
            level_9:1
          }

          console.log('estou aquii')
          let odds = level[Number(desiredChamp.cost) - 1]/champs[Number(desiredChamp.cost)].length
          
          console.log(odds,champ.name)
          oddsArray.push(odds)
          console.log(oddsArray)
          if(oddsArray.length === 9){
            champOdds.champion = champ.name
            champOdds.level_1 = oddsArray[0]
            champOdds.level_2 = oddsArray[1]
            champOdds.level_3 = oddsArray[2]
            champOdds.level_4 = oddsArray[3]
            champOdds.level_5 = oddsArray[4]
            champOdds.level_6 = oddsArray[5]
            champOdds.level_7 = oddsArray[6]
            champOdds.level_8 = oddsArray[7]
            champOdds.level_9 = oddsArray[8]

            champOddsArray.push(champOdds)
          }
        }

        
      })
     
    })
    
    console.log(oddsArray,'oddsarray')
    console.log(champOddsArray)
    

  })
  return champOddsArray
}
 */


const App:React.FC = () => {
 const [champs,setChamps] = React.useState('')
 const [names,setNames] = React.useState<Champion[]>()


 

  return (
    <div>
      <button onClick={() => {
        console.log(champions.filter((champ) => champ.traits.includes('Elderwood')))
        const filterChamp = champions.filter((champ) => champ.traits.includes('Dragonsoul'))
        //const teste = getUnitsWithSameTraits('Swain')
        //console.log(teste)

       getOddsOfDesiredChamps('Talon')
       
        setNames(filterChamp)
        setChamps(JSON.stringify(filterChamp,null,2))
        
      }  
      }>Filtro </button>
      <h1>{champs}</h1>


      {names?.map((champ,i) => { 
        return (<><h2 key={i}>{champ.name}</h2>
          <h3>{champ.traits.map((traits) => {
            return <p>{traits}</p>
          })}</h3>
        </>        
          )
      })}

      
      
    </div>
  );
}

export default App;
