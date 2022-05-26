import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const date = props.item.date;
  const name = props.item.title;
  const amount = props.item.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </Card>
  );
}
