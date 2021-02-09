import React from 'react';
import {useSelector} from 'react-redux';
import Blogs from './components/blogs';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import {selectSignedIn} from './features/userslice';
import './App.css';

const App = () => {
    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div>
            <Navbar/>
            <Homepage/>
            {isSignedIn && <Blogs/>}
        </div>
    )
}

export default App;