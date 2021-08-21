import React from "react";
import { connect } from "./constants";
import { changeInterval } from "./actions";



class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>
          Интервал обновления секундомера: {this.props.currentInterval} сек.
        </span>
        <span>
          <button onClick={() => this.props.changeInterval(-1)}>-</button>
          <button onClick={() => this.props.changeInterval(1)}>+</button>
        </span>
      </div>
    );
  }
}

//неправильная передача параметров
const Interval = connect(
  (state) => ({
    currentInterval: state,
  }),
  (dispatch) => ({
    changeInterval: (value) => dispatch(changeInterval(value)),
  })
)(IntervalComponent);

export default Interval;


