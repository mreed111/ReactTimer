var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Clock = require('./Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'paused'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
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
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount < 3600 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'paused'});
      }
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    if (newStatus === 'stopped') {
      this.setState({
        count: 0,
        countdownStatus: 'paused'
      });
    } else {
      this.setState({
        countdownStatus: newStatus
      });
    }
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus === 'stopped') {
        this.setState({countdownStatus: 'paused'});

      }
    };

    return (
      <div>
        <h1 className="page-title">Timer</h1>
          <Clock totalSeconds={count}/>

          <Controls countdownStatus={countdownStatus}
            onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
