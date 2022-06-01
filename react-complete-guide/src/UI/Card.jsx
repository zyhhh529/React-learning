import React from 'react'
import './Card.css'

export default function Card(props) {
    // console.log(props);
    const className = 'card ' + props.className; // 类名中有空格代表其属于多个类
    // console.log(className);
  return (
    <div className={className}>{props.children}</div>
  )
}
