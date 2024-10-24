
const Bookmark = ({bookmark}) => {
    const{title}=bookmark;
    return (
        <div className="mb-3 rounded-xl p-4 bg-white">
            <h2 className="text-2xl ">{title}</h2>
        </div>
    );
};

export default Bookmark;