import React from 'react'
import GetAllTrainersCard from './GetAllTrainersCard';

const GetAllTrainerList = (props) =>{
    console.log(props);
    
    

    const renderTrainerContactList = props.trainercontacts.map((trainercontact) => {
        return (
           <GetAllTrainersCard trainercontact = {trainercontact}/>
        );
    })

    return (
        <div className="ui celled cards">
           {renderTrainerContactList}
            
        </div>
    )
}

export default GetAllTrainerList;
