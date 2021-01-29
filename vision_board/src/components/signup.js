import React from 'react';

function Signup() {
    //How the user info will be collected and accepted
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    }

    //User input to create account
    handleChange = (e) = {
        const: {entry, value} = e.target.value,
        this: props.state({ [entry] : value })
    }

    //Animation for the submit button
    handleSubmit = (e) = {
        default: e.preventDefault(),
    }

    return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <input type='first_name' name='fn' placeholder='first_name' required onChange = {this.handleChange}/>
                <input type='last_name' name='ln' placeholder='last_name' required onChange = {this.handleChange}/>
                <input type='email' name='email' placeholder='email' required onChange = {this.handleChange}/>
                <input type='password' name='pwd' placeholder='password' required onChange = {this.handleChange}/>
                <input type='password' name='re-enter' placeholder='password' required onChange = {this.handleChange}/>
                <button onSubmit = {this.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}


export default Signup ;