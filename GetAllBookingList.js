import React from 'react'
import GetAllBookingCard from './GetAllBookingCard';

const GetAllTrainerList = (props) =>{
    console.log(props);
    
    const deleteUserContactHandler =(id) => {
        props.getUserContactId(id);
    };

    const renderUserContactList = props.usercontacts.map((usercontact) => {
        return (
            <GetAllBookingCard usercontact={usercontact} clickHandler={deleteUserContactHandler} key={usercontact.id} />
        );
    })

    return (
        <div className="ui celled cards">
           {renderUserContactList}
            
        </div>
    )
}

export default GetAllTrainerList;
