var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(<Timer/>).toExist();
  });

  describe('Timer Clock component', () => {
    it('should pause Timer on Paused status', (done) => {
      var time = TestUtils.renderIntoDocument(<Timer/>);
      time.setState({
        count: 5,
        timerStatus: 'paused'
      });

      setTimeout(() => {
        expect(time.state.count).toBe(5);
        expect(time.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should increment Timer on Started status', (done) => {
      var time = TestUtils.renderIntoDocument(<Timer/>);
      time.setState({
        count: 5,
        timerStatus: 'started'
      });

      setTimeout(() => {
        expect(time.state.count).toBe(7);
        expect(time.state.timerStatus).toBe('started');
        done();
      }, 2002);
    });

    it('should clear Timer and set status to Paused after 59:59', (done) => {
      var time = TestUtils.renderIntoDocument(<Timer/>);
      time.setState({
        count: 3598,
        timerStatus: 'started'
      });

      setTimeout(() => {
        expect(time.state.count).toBe(0);
        expect(time.state.timerStatus).toBe('paused');
        done();
      }, 2002);
    });
  });

  describe('Timer.handleStatusChange', () => {
    it('should pause Timer on Stopped status', (done) => {
      var time = TestUtils.renderIntoDocument(<Timer/>);
      time.setState({
        count: 5,
        timerStatus: 'paused'
      });

      setTimeout(() => {
        expect(time.state.count).toBe(5);
        expect(time.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });


  });


});
