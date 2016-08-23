var React = require('react');
var {Link} = require('react-router');

var Clock = require('./Clock');

var Timer = (props) => {
  return (
    <div>
      <h1>...Timer.jsx...</h1>
      <Clock />
    </div>
  )
};

module.exports = Timer;
