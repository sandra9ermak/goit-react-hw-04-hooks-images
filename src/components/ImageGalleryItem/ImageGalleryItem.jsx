import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, alt, largeImageURL, showModalImg, ...key }) => {
    return (
        <li key={key} className="ImageGalleryItem" onClick={() => showModalImg({modalImage: {
            largeImageURL,
            alt
          }})}>
            <img src={webformatURL} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    showModalImg: PropTypes.func.isRequired
}