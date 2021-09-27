import React ,{useRef} from 'react';
import { Link } from "react-router-dom";
import DetailsCard from './DetailsCard';


const DetailsList = (props) =>{
    console.log(props);
    const inputEl = useRef("");
    const deleteContactHandler =(id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) =>{
        return(
           
           <DetailsCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
           );
    } )

    const getSearchTerm = () => {
       // console.log(inputEl.current.value);
       props.searchKeyword(inputEl.current.value);
    };

    return(
        <div className="main">
            <div  className="container">
                <div className="row mt-3">
                    <div className="col-10">
                        <div className="ui search width={8}">
                            <div className="ui icon input">
                                <input ref = {inputEl} type="text" placeholder="search contact" className="prompt" value={props.term} onChange={getSearchTerm} />
                                <i className="search icon"></i>
                            </div>
                        </div>  
                    </div>

                    
                
                    <div className="col-2 ">
                        <Link to="/add">
                        <button className="ui button blue right">Add Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="container my-3">
                <div className="row my-3">
                    <div className="col-4 "><h5 className="font-weight-bold">Name</h5></div>
                    <div className="col-4"><h5 className="font-weight-bold">Email</h5></div>
                    <div className="col-4"><h5 className="font-weight-bold">Options</h5></div>
                </div>
            </div >
            
            <div className="ui celled list" >
                 {renderContactList.length >0 ? renderContactList : <h5>No Contacts available</h5>}
            </div>
        
        </div>
    );
}
export default DetailsList;