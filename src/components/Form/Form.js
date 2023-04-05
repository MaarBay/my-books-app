import React, { Fragment, useState } from "react";
import classes from "./Form.module.css";
import LoginButton from "./LoginButton";

const Form = ({ submitForm, value, onChange }) => {


  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // deriving a new value
  const enteredNameIsValid = value.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // deriving an overall validity of the form
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    submitForm(true);
    console.log(value);
    console.log(enteredEmail);

    // resetting the entered value, really handy when using useState
    setEnteredNameTouched("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  // manipulating css classes from react
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <h2 className={classes.h2txt}>Log in to your account</h2>
        <div className={nameInputClasses}>
          <label htmlFor="name">First name:</label>
          <input
            type="text"
            onChange={onChange}
            onBlur={nameInputBlurHandler}
            value={value}
          />
          {nameInputIsInvalid && (
            <p className={classes["error-txt"]}>Name shouldn't be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className={classes["error-txt"]}>Please enter a valid email.</p>
          )}
        </div>
        <div className={classes.btnbox}>
          <LoginButton
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </LoginButton>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
