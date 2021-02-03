import React, {useState} from 'react';
//Importing Avatar image component
import {Avatar} from '@material-ui/core';
//Importing Google Logout API feature
import {GoogleLogout} from 'react-google-login';
//Importing Dispatch and useSelector feature
import {useDispatch, useSelector} from 'react-redux';
//Importing Primary features between user data and input field of the userSlice
import {selectSignedIn, 
    selectUserData, 
    setInput, 
    setSignedIn, 
    setUserData} from "../features/userslice";
//Importing CSS style to Navbar
import '../styling/navbar.css'


const Navbar = () => {
    //Function for the input value and placeholder
    const [inputValue, setInputValue] = useState('tech')

    //Check the sign in status of the user in the navbar
    const isSignedIn = useSelector(selectSignedIn);

    //Function to display user's name and image in the navbar
    const userData = useSelector(selectUserData)

    //Created dispatch function for Google Login API
    const dispatch = useDispatch()

    //Logout function received from Google Login API
    const logout = (response) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    //Displays the data from the user inquery
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue))
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleClick(e)
        }
    }

    return (
        <div className='navbar'>
            <h1 className='navbar__header'>BeyondTheVisoin<i className='fas fa-portal-enter'></i></h1>
            {isSignedIn && (<div className='blog__search'>
            <input className='search' 
            placeholder='Search for a blog' 
            value={inputValue}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='search' onClick={handleClick}>Search</button>
            </div>)}
            {isSignedIn ? (<div className='navbar__user__data'>
                <Avatar className='user' src={userData?.imageUrl} alt={userData?.name} />
                <h1 className='signedIn'>{userData?.givenName}</h1>
                <GoogleLogout clientId = '959771446236-ea7sj26t70vuvt337rilnj76mgpml1op.apps.googleusercontent.com'
                    render = {(renderProps) => (
                        <button
                        onClick={renderProps.onCliclk}
                        disabled={renderProps.disabled}
                        className='logout__button'>
                            Logout <i className='fas fa-sign-out-alt'></i>
                        </button>
                    )}
                    buttonText='Logout'
                    onLogoutSuccess={logout}
                />
            </div>) : (<h1 className='notSignedIn'>User not available <i className='far fa-frown'></i><i className='far fa-heart-broken'></i></h1> )}
        </div>
    )
}

export default Navbar;
