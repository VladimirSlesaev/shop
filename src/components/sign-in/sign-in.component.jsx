import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';

class SingIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit =event =>{
     event.preventDefault();

     this.setState({email:'', password: ''})
    }

    handleChenge = event =>{
        const {value , name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sing-in">
             <h2>I already have an account</h2>
             <span>Sing in with your email and password</span>

             <form onSubmite={this.handleSubmit}>
                 <FormInput
                 name="email" 
                 type="email"
                  value={this.state.email}
                  label="email"
                    handleChange={this.handleChenge}
                   required/>
                 <FormInput
                  name="password" 
                  type="password" 
                  value={this.state.password} 
                  label="password"
                  handleChange={this.handleChenge}
                  required/>
                  <div className="buttons">
                  <CustomButton type="submit">SING IN</CustomButton>
                 <CustomButton onClick={signInWithGoogle}>WITH GOOGLE</CustomButton>
                  </div>
                
             </form>
            </div>
        )
    }
}
export default SingIn;
