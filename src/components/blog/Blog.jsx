
const Blog = ({blog,handleBookmark,handleTime}) => {
    
    const{title,author,cover,author_img,posted_date,reading_time,id}=blog;

    return (
        <div className="mb-10">
            <img className="rounded-xl" src={cover} alt="" />
            <div className="flex justify-between mt-4 items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold">{author}</h3>
                      <p className="text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="text-gray-600">0{reading_time} min read</p>
                   <button onClick={()=>handleBookmark(blog)}> <img className="w-7" src="https://img.icons8.com/?size=48&id=26089&format=png" alt="" /></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold my-4">{title}</h1>

            <button className="text-blue-500 my-5 underline" onClick={()=>handleTime(id,reading_time)}>Mark as read</button>

            <hr />

        </div>
    );
};

export default Blog;