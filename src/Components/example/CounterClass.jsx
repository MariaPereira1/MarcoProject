import React, { Component } from "react";

export class CounterClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    render() {
        const { counter } = this.state;

        return (
            <div>
                <h2>
                    Counter: <b>{counter}</b>
                </h2>
                <button
                    onClick={() => {
                        this.setState(state => ({
                            counter: state.counter + 1
                        }));
                    }}
                >
                    Sum
                </button>
                <button
                    onClick={() => {
                        this.setState(state => ({
                            counter: state.counter - 1
                        }));
                    }}
                >
                    Sub
                </button>
            </div>
        );
    }
}
