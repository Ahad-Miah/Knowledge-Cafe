import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const[blogs,Setblogs]=useState([]);
    useEffect(()=>{

        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>Setblogs(data))

    },[])
   


    return (
        <div className="border border-red-600 w-2/3">
            <h1>Blogs {blogs.length}</h1>
        </div>
    );
};

export default Blogs;