import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberChild: 5,
      username: "Cybersoft",
    };
    this.interval = null;
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log("UNSAFE_componentWillReceiveProps", nextProps);
  //  this.setState({})
  //   }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps.number === currentState.numberChild) {
      //Cập nhật lại state "username"
      return {
        username: "Nguyen",
      };
    }
    return null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Child</h3>
        <p>
          Username: {this.state.username} - numberChild:{" "}
          {this.state.numberChild}
        </p>
      </div>
    );
  }
}
