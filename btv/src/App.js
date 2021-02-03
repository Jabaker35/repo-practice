import React from 'react';
import GoogleLogin from 'react-google-login';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
  } from "./features/userslice";
  import "./styling/home.css";
const Homepage = () => {
    //Function that animates whether the user has signed in or not
    const isSignedIn = useSelector(selectSignedIn);
    //Function to send the user signed status into the navbar
    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };
    //HTML Elements that will connect the Google API log in method
    return (
        <div className='homepage__page' style={{display:isSignedIn ? 'none' : ''}}>
            {!isSignedIn ? (
                <div className='login__message'>
                <h2><i className='fas fa-broadcast-tower'></i></h2>
                <h1>Welcome to Beyond The Vision</h1>
                <p>A safe place where you can find your voice through
                your favorite articles in one place.</p>
            <GoogleLogin
                clientId = '959771446236-ea7sj26t70vuvt337rilnj76mgpml1op.apps.googleusercontent.com'
                render = {(renderProps) => (
                    <button onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className='login__button'>
                        Login with Google
                    </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />
            </div>
            ) : ('')}
        </div>
    );
};
export default Homepage;