import React, { useState,useEffect } from 'react'
import zabbix from './services/zabbix';
import './assets/style.scss';
import { Link } from 'react-router-dom';
import advancia from './assets/logo.png';
import Groupe from './components/groupe';

const App = () =>{
  const [problems,setProblems] = useState();
  var haut= [],desastre= [],nonClasse= [],reste= [], uniqueTags = [];
  //retourne les groupes exactes sans redondance
  const uniqueGroupe = (tableau,ajout)=>{
    uniqueTags= tableau.map(problem=>problem.groups[0].name)
    console.log("problemes",problems);
    const banned = ['ADV','ADV-Hyper-V','COMAF','Console-DT','Vectorys-OTT','AIL','BTS','Cepex','Cottam',
    'Cotrel','Delice','El kateb','Magherbia','MDCI','Shams','SNCFT','Zabbix servers'].concat(ajout)
    uniqueTags = uniqueTags.filter(pb=>!banned.includes(pb))
   uniqueTags = [...new Set(uniqueTags)];
   return uniqueTags;
  }
 //const token = zabbix.get_user_token().then(token=>settoken(token))
 const remplirProblemes = () =>{
  haut=uniqueGroupe(problems.filter(pb=>pb.priority==='4'),[]);
  desastre=uniqueGroupe(problems.filter(pb=>pb.priority==='5'),haut);
  nonClasse=uniqueGroupe(problems.filter(pb=>pb.priority==='0'),haut.concat(desastre));
  reste=uniqueGroupe(problems.filter(pb=>pb.priority!='4' && pb.priority!='5' && pb.priority!='0'),haut.concat(desastre).concat(nonClasse));
  console.log('non classe',nonClasse.length);
   
  }
 useEffect(()=>{
   zabbix.get_problems(process.env.REACT_APP_ZABBIX_TOKEN).then(problem=>setProblems(problem))
   },[problems])
   if (uniqueTags.length ===0 && problems!=null){
     remplirProblemes()
   } 

  return (
    <div>
      <header style={{background:'#36F1CD'}}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <img src={advancia} style={{margin:'20px'}}/>
          <h2 style={{textAlign:'center'}}>Monitoring ADV</h2>
          <div style={{float:'right',display:'inline-block'}}>
            <label name="sev" id="severite">Sévérité : </label>
            <select name="severite" id="severite">
            <option value="nonclasse">Non classé</option>
            <option value="desastre">desastre</option>
            <option value="haut">Opel</option>
            <option value="reste">reste</option>
            </select>
          </div>
          
        </nav>
      </header>
      
      <div className='circle-container'>
        
        {
          haut ? haut.map(groupe=>{
            return(
              <Link to={{pathname: "/tableau",
              state: {
                problem: problems.filter(problem=>problem.groups[0].name===groupe),
              }}}>
                <Groupe groupe={groupe} problem={problems.filter(problem=>problem.groups[0].name===groupe)} color={"rgb(233,118,89)"}/>
              </Link>

            )}):'<p>nothing</p>'
        }
        
      
      </div>
      <div className='circle-container1'>
        {
          reste ? reste.map(groupe=>{
            return(
              <Link to={{pathname: "/tableau",
              state: {
                problem: problems.filter(problem=>problem.groups[0].name===groupe),
              }}}>
                <Groupe groupe={groupe} problem={problems.filter(problem=>problem.groups[0].name===groupe)} color={"#FFC859"}/>
              </Link>

            )}):'<p>nothing</p>'
        }
      
      </div>
      <div className='circle-container2'>
        {
          nonClasse ? nonClasse.map(groupe=>{
            return(
              <Link to={{pathname: "/tableau",
              state: {
                problem: problems.filter(problem=>problem.groups[0].name===groupe),
              }}}>
                <Groupe groupe={groupe} problem={problems.filter(problem=>problem.groups[0].name===groupe)} color={"#FFA059"}/>
              </Link>

            )}):'<p>nothing</p>'
        }
      
      </div>
      {/*<svg width="500" height="500"  ><line x1="663.203125" y1="855" x2="197.93035888671875" y2="216.0877685546875" stroke="black"/></svg>*/}
      {/*<img src={advancia} id="adv" style={{top:'95%',right:'47%',position:'absolute'}} width="100" height='28'/>*/}
      
    </div>
  );
}

export default App;
