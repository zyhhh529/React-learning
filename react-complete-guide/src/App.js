import React, { useState } from "react";
import Expenses from "./Expenses/Expenses";
import ExpenseForm from "./NewExpense/ExpenseForm";

export default function App() {
  const dummyExp = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummyExp);


  const newExpHandler = (newExp) => {
    // console.log(newExp);
    setExpenses((prevExpense) => {
      return [newExp, ...prevExpense];
    });
  };

  return (
    <>
      <ExpenseForm onNewExpense={newExpHandler} />
      <Expenses items={expenses} />
    </>
  );
}
