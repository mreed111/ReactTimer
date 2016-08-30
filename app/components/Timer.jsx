var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'paused'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStartTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  handleStartTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount < 3600 ? newCount : 0
      });

      if (this.state.count === 0) {
        this.setState({timerStatus: 'paused'});
      }
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    if (newStatus === 'stopped') {
      this.setState({
        count: 0,
        timerStatus: 'paused'
      });
    } else {
      this.setState({
        timerStatus: newStatus
      });
    }
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
          <Clock totalSeconds={count}/>

          <Controls countdownStatus={timerStatus}
            onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
