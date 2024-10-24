import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

const Blogs = ({handleBookmark,handleTime}) => {

    const[blogs,Setblogs]=useState([]);
    useEffect(()=>{

        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>Setblogs(data))

    },[])
   
    return (
        <div className="w-2/3">
            {
                blogs.map((blog=><Blog handleBookmark={handleBookmark} handleTime={handleTime} key={blog.id} blog={blog}></Blog>))
            }
        </div>
    );
};

export default Blogs;