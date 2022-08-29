import React, { useState } from "react";
import Input from "./Input.css";
const App = () => {

  const [values,setValues]=useState({
    fullname :"",
    password :"",
    email :"",
});

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name] : event.target.value,
  });
  }

  const SubmitButton = (event) => {
    event.preventDefault();
    console.log(values);
  }
  
  return (
    <>
    <div className="Input">
    <label>Username </label>
      <input type='text' name="fullname" value={values.fullname} onChange={changeHandler}></input>
      <br />
      <label>Password</label>
      <input type='password' name="password" value={values.password} onChange={changeHandler}></input>
      <br />
     <label>Email</label>
      <input  type='email' name="email" value={values.email} onChange={changeHandler}></input>
      <br />
      <button className="button-press"  type="submit" onClick={SubmitButton}>submit</button>
      </div>
    </>
  );
};

export default App;
