import React from "react";
import Card from "../UI/Card";
import "./AddUser.css"
import Button from "../UI/Button";

export default function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type='text'/>
          <label htmlFor="age">Age</label>
          <input id="age" type='number'/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
