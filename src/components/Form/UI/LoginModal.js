import React, { Fragment, useState } from "react";
import classes from "./LoginModal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Form from "../Form";
import Welcome from "./Welcome";

const LoginModal = ({ onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [enteredName, setEnteredName] = useState("");


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = () => {
    setFormSubmitted(true);
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={onClose}>
        <div
          className={classes["modal-container"]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={classes.closebtn}>
            <button type="button" className={classes.close} onClick={onClose}>
              <AiFillCloseCircle />
            </button>
          </div>
          {!formSubmitted ? (
            <Form
              submitForm={submitFormHandler}
              onClose={onClose}
              value={enteredName}
              onChange={nameInputChangeHandler}
            />
          ) : (
            <Welcome value={enteredName} onChange={nameInputChangeHandler} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default LoginModal;
