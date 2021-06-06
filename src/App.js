import React, { useState,useEffect } from 'react'
import zabbix from './services/zabbix';
import server from './assets/imgstore.png'
import variables from './assets/style.scss'
import advancia from './assets/logo.png';
import Groupe from './components/groupe';

const App = () =>{
  const [tokens, settoken] = useState(null);
  const [problems,setProblems] = useState();
  var uniqueTags = []
 //const token = zabbix.get_user_token().then(token=>settoken(token))
 
 useEffect(()=>{
  zabbix.get_problems("0ed7a3b19347cfc407e352308aa56305").then(problem=>setProblems(problem))
  },[]) 
if (uniqueTags.length ===0 && problems!=null){
   uniqueTags= problems.map(problem=>problem.groups[0].name)
   uniqueTags = [...new Set(uniqueTags)];
   console.log(variables)
  }

  
/*
{
          problems.map(problem=>{
            return(<div>
                <p>{problem.groups.name}</p>
              </div>)
          
          })
        }
*/
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Monitoring ADV</h2>
      <div class='circle-container'>
        
        {
          uniqueTags ? uniqueTags.map(groupe=>{
            return(
              <Groupe groupe={groupe} problem={problems.filter(problem=>problem.groups[0].name===groupe)}/>
            )
              
          
          }):'<p>nothing</p>'
        }
        
        </div>
    </div>
  );
}

export default App;
