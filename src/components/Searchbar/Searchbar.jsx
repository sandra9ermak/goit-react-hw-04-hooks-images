import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit, onChange }) => {
    return (
        <header className="Searchbar">
  <form className="SearchForm" onSubmit={onSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

          <input
            onChange={onChange}
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}