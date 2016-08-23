var React = require('react');
var {Link} = require('react-router');

var Clock = require('./Clock');

var Timer = (props) => {
  return (
    <div>
      <Clock />
    </div>
  )
};

module.exports = Timer;
