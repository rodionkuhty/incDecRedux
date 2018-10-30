import React, { Component } from "react";
import { connect } from "react-redux";
class Todo extends Component {
  render = () => {
    console.log(this.props);
    const { num } = this.props.state;
    const { ink, dec } = this.props;
    return (
      <div>
        <p>{num}</p>
        <button onClick={ink}>INC</button>
        <button onClick={dec}>DEC</button>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  ink: () => dispatch({ type: "INCREMENT" }),
  dec: () => dispatch({ type: "DECREMENT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
