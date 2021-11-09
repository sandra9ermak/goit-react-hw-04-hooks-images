import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <div className="button-wrapper">
            <button onClick={onClick} type="button" className="Button">Load more</button>
        </div>
    )
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}