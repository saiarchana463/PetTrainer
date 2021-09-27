import React,{useState,useEffect} from 'react'
import HomeHeader from './HomeHeader';
//import ApproveBooking from './ApproveBooking'; 
import GetAllBookingList from './GetAllBookingList';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import api from './contacts';

 const Trainers = () => {

    const [usercontacts,setUserContacts] = useState([]);  

 /* const usercontacts =[
       {
           name:"user1",
           date:"12-4-2021",
           time:"13:08"
       },
       {
        name:"user2",
        date:"12-12-2021",
        time:"17:08"
       },
   ];  
                */

   useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/trainer/booking')
    .then(res => {
        console.log(res)
        setUserContacts(res.data)
    })
    .catch(err => {
        console.log(err)
    })
},[])  

   const submitUserContactHandler = (usercontact) => {
    console.log(usercontact);
};

const removeUserContactHandler = async (id) =>{
    await api.delete(`/usercontacts/${id}`);
    const newContactList = usercontacts.filter((usercontact) => {
        return usercontact.id !== id;
    });
    setUserContacts(newContactList);
};

    return (
        <div className="ui container">
            
                
                {/*   <ApproveBooking /> */}
           
            <HomeHeader />


            
            <Router>
                <Switch>
                    <Route path="/trainer/booking" exact render={(props) =>(
                    <GetAllBookingList  {...props} usercontacts={usercontacts} 
                    getUserContactId={removeUserContactHandler}/>
                    ) } />
                
                </Switch>
            </Router>
            
        </div>
    )
}

export default Trainers;