import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,mark}) => {
    return (
        <div className='md:w-1/3 p-3'>
            <div className="border-fuchsia-800 border-2 p-5 rounded-xl mb-5 bg-gray-100 text-purple-700">
            <h2 className="text-center text-2xl font-bold ">Spent time on read: {mark} min</h2>
            </div>
            
            
            
            <div className=" bg-gray-100 p-5 rounded-xl">
            <h2 className="text-3xl font-bold mb-5">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
            
        </div>
    );
};

export default Bookmarks;

Bookmarks.propTypes ={
    bookmarks:PropTypes.array.isRequired,
    mark:PropTypes.number.isRequired
}