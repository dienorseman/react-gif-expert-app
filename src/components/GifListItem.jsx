import React from "react";

export const GifListItem = ({ id, title, url }) => {
  return (
    <li className="card">
      <img src={url} alt="gif"/>  
      <p>{title}</p>
    </li>
  );
};
