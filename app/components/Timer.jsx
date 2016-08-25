var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Clock = require('./Clock');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={222}/>

      </div>
    );
  }
});

module.exports = Timer;
