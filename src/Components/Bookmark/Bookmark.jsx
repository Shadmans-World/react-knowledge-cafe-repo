import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} =bookmark
    return (
        <div className="p-5 rounded-xl mb-3 bg-white">
            <h3 className="text-3xl">{title}</h3>
        </div>
    );
};

export default Bookmark;
Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}