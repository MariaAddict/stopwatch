import React from "react";
import Interval from "./Interval";
import { connect } from "./constants";

class TimerComponent extends React.Component {
  state = {
    currentTime: 0,
  };

  timerId = null;

  //добавляю переменную, чтобы таймер корректно считал в зависимости от исходных данных, при котором запустился.
  //чтобы запустить секундомер с другим периодов, необходимо снова начать старт
  _increaseTime = (intervalCurrentIntervalTimer) => {
    this.setState({
      currentTime: this.state.currentTime + intervalCurrentIntervalTimer,
    });
  };

  //приватная функция, потому что искользуется только внутри класса
  _handleStart() {
      //проверка на наличие таймера
      if (this.timerId) this._handleStop() ;
      const intervalCurrentIntervalTimer = this.props.currentInterval;
    // this.props.currentInterval * 1000 - перевод в миллисекунды
    this.timerId = setInterval(
      () => this._increaseTime(intervalCurrentIntervalTimer),
      this.props.currentInterval * 1000
    );
  }

  //приватная функция, потому что искользуется только внутри класса
  _handleStop() {
    this.setState({ currentTime: 0 });
    //обнуление таймера
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <Interval />
        <div>Секундомер: {this.state.currentTime} сек.</div>
        <div>
          {/*потеря контекста*/}
          <button onClick={() => this._handleStart()}>Старт</button>
          <button onClick={() => this._handleStop()}>Стоп</button>
        </div>
      </div>
    );
  }
}

const Timer = connect(
  (state) => ({
    currentInterval: state,
  }),
  () => {}
)(TimerComponent);

export default Timer;
