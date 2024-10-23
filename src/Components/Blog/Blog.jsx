import PropTypes from 'prop-types'
import Bookmark from '../../assets/images/ribbon.png'

const Blog = ({blog,handleAddToBookmark}) => {
    const {title, cover,author,posted_date,author_img,reading_time,hashtags} =blog;
    return (
        <div className='mb-20'>
            <img className='h-[450px] w-full object-cover' src={cover} alt={`cover of title ${title}`} />
            <div className='flex justify-between items-center mt-3 mb-3'>
                <div className='flex gap-3'>
                    <img className='w-[50px] h-[50px] rounded-full' src={author_img} alt="" />
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-custom-gray'>Posted: {posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-custom-gray'>{reading_time} min read</p>
                    <button onClick={()=>{handleAddToBookmark(blog)}}><img className='w-[20px] h-[20px]' src={Bookmark} alt="" /></button>
                </div>
            </div>
            <h2 className='text-5xl font-bold mb-3'>{title}</h2>
            <div className='flex gap-3 text-custom-gray mb-3'>
                  {hashtags.map((hashtag, index) => (
                     <p key={index} className="hashtag">
                        <a href="">{hashtag}</a>
                         
                     </p>
))}
            </div>
            <a className='text-blue-800 underline'  href="">Mark as read</a>
        </div>
    );
};

export default Blog;

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
    
}