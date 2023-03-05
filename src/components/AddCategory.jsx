import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [search, setSearch] = useState("");
  
  const onSubmit = (event) => {

    event.preventDefault();

    if (search.trim().length <= 1) return; 
    onNewCategory( search.trim())
    setSearch(""); 
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
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
