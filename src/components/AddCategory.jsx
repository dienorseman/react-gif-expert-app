import { useState } from "react";
import PropTypes from 'prop-types'



export const AddCategory = ({ onNewCategory }) => {
  
  const [search, setSearch] = useState( '' );
  
  const onSubmit = (event) => {
    event.preventDefault();

    if (search.trim().length <= 1) return; 
    onNewCategory( search.trim())
    setSearch(""); 
  };

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label='form'>
      <input
        type="text"
        placeholder="Search gifs"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}