import React from 'react'
import {Link} from "react-router-dom";
 
const GetAllTrainersCard = (props) => {
    let color=""
    const {name,experience,shopname,status} = props.trainercontact;

   
    return (
        <div>
             <div className="ui card m-3" style={{heigth:"20%"}}>
                <div className="image">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" style={{width:"100px",height:"100px",margin:"10% 30% 10% 30%"}}/>
                </div>
                
                <div className="content text-center font-weight-ligth">
                    
                    <div className="header">{name}</div>
        
    
                    <div className="description">
                        <div>{experience} years</div>
                        <div>{shopname}</div>
                    </div>
                
                </div>
                
                <div className="extra content text-muted">
                    
                        <i className="user icon mr-3"></i>
                       <span className=" font-italic">{status}</span>
                        
                </div>
            </div>
        </div>
    )
}

export default GetAllTrainersCard;