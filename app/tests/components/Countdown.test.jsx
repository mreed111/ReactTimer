var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown component', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('Countdown.handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(12);

      expect(countdown.state.count).toBe(12);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdown.state.count).toBe(11);
        done();
      }, 1001)
    });

    it('should not countdown below zero(0)', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });

    it('should pause countdown on Paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(5);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(5);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should set countdown to zero and status to stopped on reset', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(5);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });

});
