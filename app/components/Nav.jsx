var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" >Timer</IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link" >Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created By</li>
            <li>
              <a href="https://www.linkedin.com/in/mikereed111" target="_blank">Mike Reed</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
