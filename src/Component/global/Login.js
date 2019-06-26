import React,{Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from './API/API'
import axios from 'axios'

class Login extends Component{

    constructor(props) {
        super(props);
         this.handleClick = this.handleClick.bind(this);
         this.handleLogin = this.handleLogin.bind(this);
        this.state = {
          username: "",
          password: ""
        }
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    async handleClick() {
        var URL = API.url;
        const response = await axios.post(URL+'login',{
                username: this.state.username,
                password: this.state.password,
             },       
          {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
          })
        alert(response.data.status)        
   }
   handleLogin() {
    console.log("USUARIO: " + this.state.usuario);
    console.log("Password: " + this.state.password);
    }

   handleChange = event =>{
        this.setState({
        [event.target.id]: event.target.value
        });
    }
    
    render(){
        return (    
            <div class="container">
            <div class="col-sm-6 mx-auto">
                <div class="card mt-5">
                    <div class="card-body">
                        <h1 class="text-center">
                            <span class="fa fa-sign-in-alt"></span> Login</h1>
                        <form onSubmit={this.handleClick}>
                            <FormGroup controlId="username" bsSize="large">
                                <ControlLabel className="input">Usuario:</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel className="input">Contraseña:</ControlLabel>
                                <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                onChange=""
                                >
                                Ingresar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
    }

}
export default Login;
