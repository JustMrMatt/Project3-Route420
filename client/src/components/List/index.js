import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export function ListItem(props) {
  return (
  <div className="list-group-item">{props.children}


<span className="item-title">{props.title}</span><br />

<span className="item-author">{props.author}</span><br />

<a href={props.link}>
<span className="item-link">{props.link}</span></a>
                     


  </div>);
}
