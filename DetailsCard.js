import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const DetailsCard = (props) =>
{
    const {id,name,email} = props.contact;
    return(
        <div className=" container content-justify-center item ">
        <div className=" row my-3 content-justify-center">

            <Link to={{pathname:`/contact/${id}` , state:{contact:props.contact}}}>
            <div className="col-5  header">{name}</div></Link>

            <div className="col-5 text-center" >{email}</div>

            <Link to={{pathname:`/edit`,state:{contact:props.contact}}}>
            <div className="col-1"><i class="edit outline icon" onClick={() =>props.clickHandler(id) }></i></div>
            </Link>
            
            <div className="col-1">
                <i className="trash alternate outline icon " 
                onClick={() => props.clickHander(id)}
                ></i>
            </div>
        </div>
    </div>
    );
};

export default DetailsCard;