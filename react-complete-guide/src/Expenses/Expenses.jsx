import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021"); // 因为是要在这个组件中要用到filteredYear，所以在这里定义state

  let expenses = props.items;

  const changeYearHandler = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  const filteredExp = expenses.filter((expense) => {
    // console.log(expense.date.getFullYear());
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let toRender = <p className="expenses-list__fallback">Nothing here!</p>;
  if (filteredExp.length > 0) {
    toRender = filteredExp.map((item, index) => {
      return <ExpenseItem item={item} key={index} />; // 循环构造组件需要用index作为key，否则会有warning
    });
  }

  return (
    // don't know how many
    <div>
      {/* 向自己写的Card容器中传入类名，在Card中形成二元类，即是Card类也是这个传入类 */}
      <Card className="expenses"> 
        {/* Card内部写的这些元素在Card的props.children可以访问 */}
        <ExpensesFilter
          filteredYear={filteredYear}
          onChangeYear={changeYearHandler}
        />
        {toRender}
      </Card>
    </div>
  );
}
