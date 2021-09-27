import React,{useState , useEffect} from 'react'
import HomeHeader from './HomeHeader';
import AddBooking from './AddBooking';
import GetAllTrainerList from './GetAllTrainerList';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import axios from 'axios';

 function PetOwners() {
  {/*}  const[trainercontacts,setTrainerContacts] = useState([]); 

    const submitUserContactHandler = (trainercontact) => {
        console.log(trainercontact);
        setTrainerContacts([...trainercontacts,trainercontact]);
    };   */}

    const[trainercontacts,setTrainerContacts] = useState([]); 

    useEffect(() => {
        axios.get('/home')
        .then(res => {
            console.log(res)
            setTrainerContacts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

  /*  const trainercontacts = [
        {
            id:"1",
            name:"ABC",
            experience:"8",
            shopname:"abc",
            status:"available"
        },
        {
            id:"2",
            name:"DEF",
            experience:"16",
            shopname:"def",
            status:"unavailable"
        },
    ];    */

   

    return (
        <div className="ui container">
            
            <HomeHeader />
            <Link to="/booking">
                        <button className="ui button blue right">Book here</button>
                        </Link>
                       {/*    <AddBooking submitUserContactHandler={submitUserContactHandler}   />   */}
            <GetAllTrainerList trainercontacts={trainercontacts}/>
        </div>
    )
}

export default PetOwners;