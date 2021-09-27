import React from 'react'
import {Link} from "react-router-dom";
 
const GetAllBookingCard =(props) => {
    const {name,date,time} = props.usercontact;

   
    
    return (
        <div className="ui card">
                <div className="image">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" style={{width:"100px",height:"100px",margin:"10% 30% 10% 30%"}}/>
                </div>
                <div className="content text-center">
                    <div className="header text-center"> {name}</div>
                    <div>{date}</div>
                    <div>{time}</div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                    <div className="ui basic green button">✔</div>
                    <div className="ui basic red button"><button className="btn btn-danger" onClick={() =>props.clickHandler(name) }>✘</button></div>
                    </div>
                    
                </div>
            </div>
    )
}

export default GetAllBookingCard;