import React,{Component, useReducer} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
             email:"",
             password:"",
             submitMessage:"",
             submitMessageTextColor:"",
        };
    }
    
    

 
    onChange=(event)=>{
        
        this.setState({
        [event.target.name]:event.target.value,
        });
        var x=event.target.name
        console.log(event.target.value,this.state.email,x)
        };
        
        onSubmit=async (event)=>{
        event.preventDefault();
        
        if(this.state.name === "" || this.state.email === "" || this.state.experience === "" || this.state.shopname === "" || this.state.password === "" ){
            alert("All the fileds are mandatory!");
            return;
        }

        const newContact={
         email:this.state.email,
         password:this.state.password,
         
        };
        
        var res
        //const res=await 
        await axios.post("/login",newContact).then(data=>res=data.data);
        console.log(res)
        if(res.role.toLowerCase()=='user'){
            return this.props.history.push('/Trainers.js')
        }
        else if(res.role.toLowerCase()=='trainer'){
            return this.props.history.push('/getAllTrainersList.js')
        }
        else if(res.role.toLowerCase()=='admin'){
            return this.props.history.push('/Admin.js')
        }
        else{
            this.setState({
                submitMessage:"Invalid Email/password! Try again",
                submitMessageTextColor:"text-danger",
                });
        }
        // let isSuccessful= res.id==undefined ? false : true;
        // const {name}=this.state;
        // if (isSuccessful){
        //   return this.props.history.push('/home')
        // }else{
        // this.setState({
        // submitMessage:"Invalid Email/password! Try again",
        // submitMessageTextColor:"text-danger",
        // });
        // }
        };
        
        render(){
        const {submitMessageTextColor,submitMessage}=this.state;
       
        return(
        <div className="container  my-5 border-0">
            <div className=" row  bg-info py-2"><h5 >Magic pet</h5></div>
           <div className=" jumbotron row justify-content-center">
        <div className="col-11 col-lg-5">
        <h1 className="font-weight-light text-center">
           <span className="text-info">Login</span> </h1>
        <form onSubmit={this.onSubmit}>
        <div className="form-group autofocus ">
        <label htmlFor="name"> </label>
        <input type="email" name="email" id="email" autoComplete="off" placeholder="name@domain.com"
        className="form-control" onChange={this.onChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" placeholder="atleast 8 characters long"
         className="form-control" onChange={this.onChange}/>
        </div>
	    
        <button className="  float-center btn btn-dark " type="submit"  
        style={{backgroundColor:"black",margin:"0% 40% 0 40%"}}>
        Login
        </button>
        <br/><br/>
        <div style={{margin:"0% 35% 0 30%"}}>
        
        New User? &nbsp;
        
          <Link to='/signup' className="text-info">Sign up</Link>
         
        
        </div>
        </form>
        </div>
        </div>
        <div className="py-5 mx-2 text-center">
        <h5 className={submitMessageTextColor}>{submitMessage}</h5>
        </div>
        </div>
        );
        }
        }
export default Login;