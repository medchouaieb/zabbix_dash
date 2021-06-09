import React from 'react'
import { useLocation } from 'react-router';

const Tableau = () =>{
    const location = useLocation()
    const { problem } = location.state
        console.log(problem);
        return (
            <table bgcolor='silver' border='2' style={{margin:'auto',marginTop:'30px'}}>
                <thead>
                <tr style={{textAlign:'center'}}>
                    <td>triggerid</td>
                    <td>description</td>
                    <td>priority</td>
                </tr>
                </thead>
                <tbody>
            {
                problem.map(pb=>{
                    return(
                        <tr>
                            <td>{pb.triggerid}</td>
                            <td>{pb.description}</td>
                            <td>{pb.priority}</td>
                            
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        )
}

export default Tableau
