import React, {  } from 'react';
import server from '../assets/imgstore.png'

const Groupe = ({groupe,problem}) =>{
        const pr=problem.filter(pb=>pb.priority===4);
        console.log(pr);

        return (
            <div>
              <div >
                <img src={server} style={{background:problem.filter(pb=>pb.priority===4)?'rgb(233,118,89)':''}}/>
                
                
              </div>
              <span>{groupe}</span>
            </div>
        );
    
}

export default Groupe;