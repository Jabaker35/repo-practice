//Show the user's data
import {createSlice} from '@reduxjs/toolkit';


//Creates the log-in and search input of the user
const userSlice = createSlice({
    name: 'user',
    initialState:{
        isSignedIn: false,
        userData: null,
        searchInput:'tech',
        blogData: null,
    },
    //Changes the initial state to true once the user has input a text
    reducer:{
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        },
    },
    });

//Callback function for payload which displays the user's input
export const {setSignedIn, setUserData, setInput, setBlogData} = userSlice.actions;

//Callback function to return the user's information 
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;
