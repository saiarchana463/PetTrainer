import React,{Component} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Link, Switch,RouteHandler,Route} from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';



class Register extends Component{
    constructor(){
        super();
        this.state={
            input: {email:'',name:'',password:'',mobilenumber:'',confirm_password:'', active:'false',role:''},
            errors:{}
        };
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.obj={email:'',name:'',password:'',mobilenumber:'',confirm_password:'',active:'false',role:''}
    }
    
    

 
    handleChange= async(event)=>{
        
        this.obj[event.target.name]=event.target.value
        
        this.setState({
            input:this.obj
          });
          
        };
        
        handleSubmit=async(event)=>{
        event.preventDefault();

        if(this.validate()){
            console.log(this.state);
  
        // let input = {};
        // input["email"] = "";
        // input["name"] = "";
        // input["mobilenumber"]="";
        // input["password"] = "";
        // input["confirm_password"] = "";
        // this.setState({input:input});
        console.log(this.state.input.name)
        const newContact={
          "email": this.state.input.email,
          "username": this.state.input.name,
          "password": this.state.input.password,
          "mobileNumber": this.state.input.mobilenumber,
          "active": false,
          "role": this.state.input.role,
      }
        
         console.log(newContact)
        const res=await axios.post("/signup",newContact);
        console.log(res)
        }
    };
    onSubmit=async(event)=>{
        event.preventDefault();
         const newContact={
         email:this.state.email,
         name:this.state.name,
         mobilenumber:this.state.mobilenumber,
         password:this.state.password,
         confirmpassword:this.state.confirmpassword
        };
        
        // const res=await axios.post("/signup",newContact);
        // console.log(res)
        // let isSuccessful=res.data.isSuccessful;
        // const {name}=this.state;
        // if (isSuccessful){
        //   return this.props.history.push('/home')
        // }else{
        
        //     alert("Something went wrong! Try again later...");
        //     return;
        
        // }    
    };
         static contextTypes = {
             router :propTypes.object,
         }
        
         validate(){
            let input = this.state.input;
            let errors = {};
            let isValid = true;
        
            
        
            if (!input["email"]) {
              isValid = false;
              errors["email"] = "Please enter your email Address.";
            }
        
            if (typeof input["email"] !== "undefined") {
                
              var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
              if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
              }
            }
      
            if (!input["name"]) {
              isValid = false;
              errors["name"] = "Please enter your name.";
            }
      
        /*    if(!input["mobilenumber"]){
                isValid=false;
                errors["mobilenumber"]="Please enter mobilenumber.";
            }   */

            if (typeof input["mobilephone"] !== "undefined") {
                var pattern = new RegExp(/^[0-9\b]+$/);
                if (!pattern.test(input["mobilephone"])) {
                    isValid = false;
                    errors["mobilephone"] = "Please enter only number.";
              
                }else if(input["mobilephone"].length != 10){
                    isValid = false;
                    errors["mobilephone"] = "Please enter valid phone number.";
                }
            }
      
            if (!input["password"]) {
              isValid = false;
              errors["password"] = "Please enter your password.";
            }
        
         /*   if (!input["confirm_password"]) {
              isValid = false;
              errors["confirm_password"] = "Please enter your confirm password.";
            }   */

            if (typeof input["password"] !== "undefined") {
                var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                if (!pattern.test(input["password"])) {
                    isValid = false;
                    errors["password"] = "Password does satisy the pattern";
              
                }
            }
        
            if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
                
              if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
              }
            } 
        
            this.setState({
              errors: errors
            });
        
            return isValid;
        }

        render(){
           
        return(
          <div  className=" container my-1 mx-5 border-0">
          <div className="row bg-info px-2"><h5 >Magic Pet</h5></div>
          <div className=" jumbotron row justify-content-center">
          
          <div className="col-11 col-lg-5">
          <h1 className="text-info font-weight-light text-center">Sign Up</h1>
        
        <form onSubmit={this.handleSubmit} autoComplete="off" >
  
          
  
          <div className="form-group autofocus">
            <label for="email"></label>
            <input 
              type="email" 
              name="email" 
              value={this.state.input.email }
              onChange={this.handleChange}
              className="form-control" 
              placeholder="name@domain.com" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group autofocus">
            <label for="name"></label>
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Eg. John Smith" 
              id="name" />
        <div className="text-danger">{this.state.errors.name}</div>
          </div>

        <div className="form-group autofocus">
            <label for="mobilenumber"></label>
            <input 
              type="text" 
              name="mobilenumber" 
              value={this.state.input.mobilenumber}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="10 digit mobile no." 
              id="mobilenumber" />
  
              

              <div className="text-danger">{this.state.errors.mobilenumber}</div>
          </div>
   
          <div className="form-group autofocus">
            <label for="password"></label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              title="alphanumeric with atleast special character and min length of 8"
              autoComplete="new-password"
              placeholder="atleast 8 characters long" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div className="form-group autofocus">
            <label for="password"></label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="confirm password" 
              title="password should be same"
             
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
          
          
          <div className="form-group autofocus">
            <label for="role"></label>
            <input 
              type="text" 
              name="role" 
              value={this.state.input.role}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter Role user or trainer?" 
              id="role" />
        <div className="text-danger">{this.state.errors.role}</div>
          </div>


          


              
          <input type="submit" value="Submit" className="btn btn-success" style={{backgroundColor:"black",margin:"0% 40% 0 40%"}}/>
          <br/><br/>
          <div style={{margin:"0% 30% 0 30%"}}>Already a user? &nbsp; 
         
          <Link to='/' className="text-info">Login</Link>
          
          </div>
        </form>
        </div>
        </div>
      </div>
        );
        }
        }
export default Register;