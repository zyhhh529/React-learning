import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [foldFlag, setFoldFlag] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 用于禁止网页自动提交刷新

    const newExp = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(newExp); // 点击submit后获得最新状态

    props.onNewExpense(newExp);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const foldClickHandler = () => {
    setFoldFlag((prevFlag) => !prevFlag);
  };

  const cancelButtonHandler = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFoldFlag(true);
  }

  let toRender = // prevFlag ==true
    (
      <div className="new-expense__actions">
        <button onClick={foldClickHandler}>Add Expense</button>
      </div>
    );

  if (!foldFlag) {
    toRender = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelButtonHandler}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return <div className="new-expense">{toRender}</div>;
}
