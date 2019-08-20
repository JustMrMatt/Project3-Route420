import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function ResultList({ children }) {
  return (
    <div>
        <h3>Search Results</h3>
        <div>
        <div>{children}</div>
        </div>
    </div>
  );
}

export function ResultItem(props) {
  return (
    <div className="result-group-item">
      {props.children}
      <img src={props.image} alt=""/> <br />
      <span className="result-label">Title:</span> {props.title} <br />
      <span className="result-label">Author:</span> {props.author} <br />
      {props.description} <br />
      <a href={props.link}>{props.link}</a>
    </div>);
}
