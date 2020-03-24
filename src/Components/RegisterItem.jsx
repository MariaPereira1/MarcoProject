import React, { Fragment } from "react";

const RegisterItem = ({ text, amount }) => {
  return (
    <Fragment>
      <b>Title:</b> {text} <b>Amount:</b> {amount}
    </Fragment>
  );
};

export default RegisterItem;
