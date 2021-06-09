import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import server from '../assets/imgstore.png'

const Groupe = ({groupe,problem,color}) =>{
        //const five = problem.filter(pb=>console.log(pb.priority));
        const [colorBg,setColorBg] = useState('')
        const essai = ()=>{
          var myDate = "26-02-2012";
          myDate = myDate.split("-");
          var newDate = new Date( myDate[2], myDate[1] - 6, myDate[0]);
          console.log(new Date.getDate());
        }
        const getBg = () =>{
        switch(problem){
          case problem.filter(pb=>pb.priority==5):
            return("rgb(233,118,89)");
          case problem.filter(pb=>pb.priority==4):
            return "#FFA059" ;
          case problem.filter(pb=>pb.priority==3):
            return("#FFC859");
          default : return('#FFC859')
        }
      }
        
        return (
            <div key={groupe} id={groupe}>
              <div >
                <img src={server} style={{background:color}}/>
              </div>
              <div style={{background:'white',color:'black',position:'absolute',textAlign:'center',bottom:'0',opacity: '0.8',width:'100%'}}>
                <span>{groupe}</span>
              </div>
              
            </div>
        );
    
}

export default Groupe;