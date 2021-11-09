import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({images, showModalImg}) => {
    return (
        <ul className="ImageGallery">
        {images.map(item => 
            <ImageGalleryItem showModalImg={showModalImg} webformatURL={item.webformatURL} alt={item.tags} key={item.id} largeImageURL={item.largeImageURL}></ImageGalleryItem>
            )
            }
        </ul>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        id: PropTypes.number
    })).isRequired,
    showModalImg: PropTypes.func.isRequired
}