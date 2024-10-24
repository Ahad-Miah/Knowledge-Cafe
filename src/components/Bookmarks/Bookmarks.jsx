import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="border border-green-600 w-1/3">
            <div className="bg-slate-200 rounded-lg">
                <h1 className="text-2xl font-bold text-blue-500 text-center py-4">Spent time on read :{readingTime} min</h1>
            </div>
            <div className="bg-slate-100">
            <h1 className="text-2xl font-bold my-5">Bookmarked Blogs :{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
        
        
    );
};

export default Bookmarks;