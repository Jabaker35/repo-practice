import React from 'react';


class Login extends React.Component{
    //How the user info will placed into the form
    state = {
        email: '',
        password: '',
    }

    //Input of the user credentials in order to log in
    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name] : value })
    };

    //Animation for the submit button once info is entered
    handleSubmit = e => {
        e.preventDefault();
        this.props.isLogin(true);
    }

    //HTML Elements creating the form for the user to login with their credentials
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type='email' name='email' placeholder='email' required onChange={this.handleChange}/>
                    <input type='password' name='pwd' placeholder='password' required onChange={this.handleChange}/>
                    <button onSubmit = {this.handleSubmit}>Log In</button>
                    <button onSubmit = {this.handleSubmit}>Sign Up, {<Signup/>}</button>
                </form>
            </div>
        )
    }
}

export default Login;
