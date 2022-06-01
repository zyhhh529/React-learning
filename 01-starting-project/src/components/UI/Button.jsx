import React from "react";
import "./Button.css";

export default function Button(props) {
  const className = "button " + props.className;
  return (
    <button
      className={className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
