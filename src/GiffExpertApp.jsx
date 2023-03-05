import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiffExpertApp = () => {

  const [categories, setCategories] = useState( [ 'death note' ] );
  const onAddCategory = ( onNewCategory ) => {

    if (categories.includes( onNewCategory )) return
    setCategories( [ onNewCategory, ...categories ] )
    
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory }/>
      {
        categories.map( ( category ) => ( <GifGrid categories={ category } key={ category } /> ))
      }
   </>
  );
};
