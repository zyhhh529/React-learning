import React from "react";
import "./Card.css";

// 写容器类主要做两件事：组成新的类名 + 获取内部组件并且放入容器中返回
export default function Card(props) {
  const className = "card " + props.className;
  return <div className={className}>{props.children}</div>;
}
