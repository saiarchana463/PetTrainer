import React,{ useState, useEffect} from 'react';
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom';
import DetailsList from './DetailsList';
import AddDetails from './AddDetails';
import {v4 as uuidv4} from 'uuid';
import IndividualDetails from './IndividualDetails';
import api from "./contacts.js";
import { uuid } from 'uuidv4';
import EditDetails from './EditDetails';
import axios from "axios";



function Admin() {

        const LOCAL_STORAGE_KEY = "contacts";

        const[contacts, setContacts] = useState([]);
        const[searchTerm , setSearchTerm] = useState("");
        const[searchResults, setSearchResults] = useState([]);

        //Retrive contacts
        const retrieveContacts = async () =>{
            const response = await api.get("/Admin/");
            return response.data;
        }

        const addContactHandler = async (contact) => {
            console.log(contact);
            const request = {
                id : uuidv4(),
                ...contact,
            };
            const response = await api.post("/Admin/add",request);
            console.log(response);
            setContacts([...contacts,response.data]);
        };

        const updateContactHandler = async(contact) =>{
            const response = await api.put(`/Admin/update/${contact.id}`.contact);
            const {id,name,email,experience,shopname,password} = response.data;
            setContacts(
                contacts.map((contact )=> {
                return contact.id === id? {...response.data} : contact;
            }));
        };

       

        const removeContactHandler = async (id) =>{
            await api.delete(`/delete/appointment/${id}`);
            const newContactList = contacts.filter((contact) => {
                return contact.id !== id;
            });
            setContacts(newContactList);
        };

        const searchHandler = (searchTerm) => {
            //console.log(searchTerm);
            setSearchTerm(searchTerm);
            if(searchTerm !== ""){
                const newContactList = contacts.filter((contact) => {
                     return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
                });
                setSearchResults(newContactList);
            }
            else{
                setSearchResults(contacts);
            }
        };

        useEffect(() =>{
         // const  retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
         // if(retriveContacts) setContacts(retriveContacts);

            const getAllContacts = async() => {
                const allContacts = await retrieveContacts();
                if(allContacts) setContacts(allContacts);
            };
            getAllContacts();
        },[]);

        useEffect(() =>{
           // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
        },[contacts]);

        return(
        <div className="ui container border-0 mt-1"> 
       
           
            <div className="row py-2 bg-info">
                

            <div className="container border-0 mt-1"> 
            <div className="row py-2 bg-info">
                <div className="col"><h6 className="text-white"> Magic Pet</h6></div>  
                <div className="col-auto">
                   
                
                    <Link  className="text-white" to='/home' ><h6>Home</h6></Link>
                    
                </div>  
                <div className="col-auto">
                    <Link className=" text-muted " to='/'><h6>Logout</h6></Link>
                    
                </div>  
                
            </div>
        </div>
            </div>
            <Router>
            <Switch>

           

                <Route path="/Admin" exact
                    render = {(props)=> (
                        <DetailsList
                          {...props}
                          contacts={searchTerm.length < 1 ? contacts : searchResults}
                          getContactId={removeContactHandler}
                          term = {searchTerm}
                          searchKeyword ={searchHandler}
                        />
                      )
                    }
                />

                    

                <Route path="/add"
                    render={(props) => (
                    <AddDetails {...props} addContactHandler={addContactHandler} />
                    )}
                />

                <Route
                    path="/edit"
                    render={(props) => (
                    <EditDetails
                    {...props}
                    updateContactHandler={updateContactHandler}
                    />
                    )}
                />
                    
                    <Route path="/contact/:id" component={IndividualDetails} />
                </Switch>
            </Router>

           

        </div>
        );
    
}
export default Admin;