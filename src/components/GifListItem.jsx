import PropTypes from 'prop-types'

export const GifListItem = ( { id, title, url } ) => {
  return (
    <li className="card">
      <img src={ url } alt={ title } />  
      <p>{ title }</p>
    </li>
  );
};


GifListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}