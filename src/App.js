import React, { useState,useEffect } from 'react'
import zabbix from './services/zabbix';
import server from './assets/imgstore.png'
const App = () =>{
  const [tokens, settoken] = useState(null);
  const [problems,setProblems] = useState();
  var uniqueTags = []
 //const token = zabbix.get_user_token().then(token=>settoken(token))
 
 useEffect(()=>zabbix.get_problems("0ed7a3b19347cfc407e352308aa56305").then(problem=>setProblems(problem))
 ,[]) 
if (uniqueTags.length ===0 && problems!=null){
   uniqueTags= problems.map(problem=>problem.groups[0].name)
   uniqueTags = [...new Set(uniqueTags)];
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
    <div style={{display:'flex', flexDirection:'row',width:'100%',flexWrap:'wrap'}}>
        {
          uniqueTags ? uniqueTags.map(problem=>{
            return(
            <div style={{color:'black',padding:'5px',margin:'10px',width:'30%'}}>
                <img src={server} style={{borderRadius:'30px',background:'red'}}/>
                <p>{problem}</p>
              </div>)
          
          }):'<p>nothing</p>'
        }
    </div>
  );
}

export default App;
