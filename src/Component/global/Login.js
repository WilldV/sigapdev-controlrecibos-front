import React,{Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from './API/API'
import axios from 'axios'

import "./css/log.css";
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

    async handleClick(e) {
        e.preventDefault()
        const URL = API.url;
        try {
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
            localStorage.setItem('user', true);
            window.location = '/';
        } catch (error) {
            console.log(error)
            alert("Usuario y/o contraseña incorrectos")
        }
        
                
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
           <div class="containerx" >
            <div id="login" class="signin-card">
                <div class="logo-image">
                    
                    <img src="http://aulavirtual.sistemas.unmsm.edu.pe/pregrado2017/pluginfile.php/2/course/section/2/logofisi.png" width="315"/>
                </div>
                <h1 class="display1">SIGAP</h1>
                <div class="centrar">
                 <img src="http://getdrawings.com/free-icon-bw/profile-png-icon-2.png" width="150" />
                 
                 </div>
                <p class="subhead">LOGIN</p>
                <form onSubmit={this.handleClick} >
                    <FormGroup controlId="username" bsSize="large">
                       <ControlLabel className="username">Usuario:</ControlLabel>
                        <FormControl
                           autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="username"
                            className="user"
                        />
                    </FormGroup>
                  

                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel className="password">Contraseña:</ControlLabel>
                        <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        placeholder="ejm:123456"
                        className="pass"
                        />
                    </FormGroup>

                    <div class="centrar">
                        <Button 
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                            onChange=""
                            placeholder="Ingresar"
                            variant="danger"
                            >
                            Ingresar
                        </Button>
                        

                    </div>



                </form>

            </div>
        </div>
        )
    }

}
export default Login;
