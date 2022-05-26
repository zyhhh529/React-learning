import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  let expenses = props.items;
  return (
    // don't know how many
    <Card className="expenses">
      {
        expenses.map((item) => {
          return <ExpenseItem item={item} />;
        })
      }
    </Card>
  );
}
