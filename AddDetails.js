import { render } from '@testing-library/react';
import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

class AddDetails extends Component{
    state = {
        name:"",
        email:"",
        experience:"",
        shopname:"",
        password:"",
    };

        add = (event) =>{
            event.preventDefault();
            if(this.state.name === "" || this.state.email === "" || this.state.experience === "" || this.state.shopname === "" || this.state.password === "" ){
                alert("All the fileds are mandatory!");
                return;
            }
            this.props.addContactHandler(this.state);
            this.setState({name:"",email:"",experience:"",shopname:"",password:""});
            this.props.history.push('/');
        };

    render(){
        return(
            <div>
                <div className="container mt-5 border-0 jumbotron justify-content-center">



                <h5 className="text-center">ADD Details </h5>
                    <form id='my-form' onSubmit={this.add} className="autofocus">
                        
                        <div className="form-group autofocus ">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" autoComplete="off" placeholder="Enter name" className="form-control" value={this.state.name} onChange={(event) =>  this.setState({name:event.target.value})}/>
                        </div>
                    
                        <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter email" className="form-control" 
                       value={this.state.email} onChange={(event) =>  this.setState({email:event.target.value})}/>
                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="experience"></label>
                        <input type="number" name="experience" id="experience" autoComplete="off" placeholder="Enter Experience" className="form-control" 
                       value={this.state.experience} onChange={(event) =>  this.setState({experience:event.target.value})}/>
                        </div>


                        <div className="form-group autofocus ">
                        <label htmlFor="shopname"></label>
                        <input type="text" name="shopname" id="shopname" autoComplete="off" placeholder="Enter Shop Name" className="form-control" value={this.state.shopname} onChange={(event) =>  this.setState({shopname:event.target.value})}/>
                        </div>

                        <div className="form-group autofocus ">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Enter Password" className="form-control" value={this.state.password} onChange={(event) =>  this.setState({password:event.target.value})}/>
                        </div>

                        <button className="  float-center btn text-white " type="submit"  style={{backgroundColor:"#0099CC",width:"50%",margin:"0% 30% 0 30%"}}>
                        Add</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default withRouter(AddDetails);