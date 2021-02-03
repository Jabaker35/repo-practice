import React, {useEffect, useState} from 'react';
//Importing a better Fetch function for other url's
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
//Importing Primary features from userSlice
import {selectUserInput, setBlogData} from '../features/userslice';
//Importing CSS style
import '../styling/blogs.css';


const Blogs = () => {
    //User will be able to type their request into the input field and send request to the API
    const searchInput = useSelector(selectUserInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=cee4877436df5ecce3776a3857bc160d`;

    //Function to retreive the data from the user's inquiry
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    //Animates a loading feature while the request is being uploaded
    const [loading, setLoading] = useState(true);

    //Loads the request of the user inquiry by retreiving data one at a time
    useEffect(() => {
        axios
        .get(blogs.url)
        .then((response) => {
            dispatch(setBlogData(response.data))
            setBlogs(response.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [searchInput]);

    //HTML properties for the displayed data of the user's inquiry
    return (
        <div className='blog__page'>
            <h1 className='blog__page__header'>Blogs</h1>
            {loading ? (<h1 className='loading'>Loading...<i className='far fa-spinner'></i></h1>) : ('')}
            <div className='blogs'>
                {blogs?.articles?.map(blog => (
                    <a className='blog' target='_blank' href={blog.url}>
                        <img src={blog.image}/>
                        <div>
                            <h3 className='sourseName'>
                            <span>{blog.source.name}</span>
                            <p>{blog.publishedAt}</p>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>
                    </a>

                ))}
                {blogs?.totalArticles == 0 && (
                    <h1 className='no__blogs'>Sorry, no blogs are currently available for your inquiry.<i className='far fa-grimace'></i></h1>
                )}
            </div>
        </div>
    )
}

export default Blogs;
