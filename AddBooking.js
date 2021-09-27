import React,{Component} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Link, Switch,RouteHandler} from 'react-router-dom';
import { event } from 'jquery';
//import Individualtrainer from './individualtrainer';

class AddBooking extends Component{
    constructor(props){
        super(props);
        this.state = {
            startdate:"",
            enddate:"",
            email:"",
            trainername:"",
            submitMessage:"",
            submitMessageTextColor:"",
    }
    
    };



    onChange=(event)=>{
        this.setState({
        [event.target.name]:event.target.value,
        });
        };

        onSubmit=async (event)=>{
            event.preventDefault();
            
            if(this.state.email==="" || this.state.startdate === "" || this.state.enddate === "" || this.state.trainername === "" ){
                alert("All the fileds are mandatory!");
                return;
            }

            const newTrainerContact={
                email:this.state.email,
                startdate:this.state.startdate,
                enddate:this.state.enddate,
                trainername:this.state.trainername,
               };
               console.log(this.state);
               const res=await axios.post("http://127.0.0.1:8080/api/booking",newTrainerContact);

               let isSuccessful= res.data.isSuccessful;
                const {name}=this.state;
                if (isSuccessful){
                    this.setState({
                        submitMessage:`Thank You!,  will contact you soon`,
                        submitMessageTextColor:"text-info",
                        });
                }else{
                    this.setState({
                    submitMessage:"Oops something went wrong ,please try again later",
                    submitMessageTextColor:"text-danger",
                    });
                }
        };  
        

       

    render(){
        const {submitMessageTextColor,submitMessage}=this.state;
        return (
        <div>
            <div className="container  my-5 border-0">
                <div className=" jumbotron row justify-content-center">
        
                    <div className="col-11 col-lg-5">
                        <h1 className="font-weight-light text-center">
                        <span className="text-info font-weigth-bold">Add Appointment</span> </h1>
                    

                            <div className="image text center">
                                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="trainer" 
                                style={{width:"100px",height:"100px",margin:"10% 35% 10% 35%"}} />
                            </div>

                        {/*    <Individualtrainer /> */}

                            <div>
                                
                            </div>

                            <form onSubmit={this.onSubmit}>

                            <div className="form-group autofocus ">
                                    <label htmlFor="email"> </label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter User mail"
                                    className="form-control"  onChange={this.onChange} />
                                </div>
                    
                                <div className="form-group autofocus ">
                                    <label htmlFor="startdate"> </label>
                                    <input type="date" name="startdate" id="startdate" autoComplete="off" placeholder="Select Date"
                                    className="form-control"  onChange={this.onChange} />
                                </div>
        
                                <div className="form-group">
                                    <label htmlFor="enddate"></label>
                                    <input type="date" name="enddate" id="enddate" placeholder="Select EndDate"
                                    className="form-control"  onChange={this.onChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="trainername"></label>
                                    <input type="text" name="trainername" id="trainername" placeholder="Enter Trainer Name"
                                    className="form-control"  onChange={this.onChange}/>
                                </div>
        
	                            <button className="  float-center btn text-info font-weigth-bold" type="submit"  
                                style={{backgroundColor:"black",margin:"0% 40% 0 40%"}}>
                                Submit
                                </button>
                            </form>
                    </div>
                </div>
                <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                </div>
            </div>
        </div>
    )
    }
    
}

export default AddBooking;