import React, { Fragment } from "react";

export function RegisterItem({ text, amount }) {
    return (
        <Fragment>
            <b>Title:</b> {text} <b>Amount:</b> {amount}
        </Fragment>
    );
}
