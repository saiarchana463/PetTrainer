import  React from 'react';
import {Link} from 'react-router-dom';

const IndividualDetails = (props) =>
{
    console.log(props);
    const {name,email,experience,shopname,password} = props.location.state.contact;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">
                        {email}<br/>
                        {experience}<br/>
                        {shopname}<br/>
                        {password}<br/>
                    </div>
                </div>
            </div>
            <div className="center-div">
              <Link to='/admin'><button className="ui button blue center">Back to Admin Home</button></Link>   
            </div>
        </div>
    );
};

export default IndividualDetails;