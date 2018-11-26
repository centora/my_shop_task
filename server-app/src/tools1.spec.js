import chai from 'chai';
const { expect } = chai;
import sinon from 'sinon';
import { days, users } from './constants';
import { showMessage, getDay, getAdultUsers } from './tools1';


describe('showMessage()', () => {

  it('should call showMessage()', () => {
    const stub = sinon.stub(window, 'alert');
    showMessage();

    expect(stub.called).to.be.true;
    stub.restore();
  });

  it('should be called with param "test"', () => {
    const stub = sinon.stub(window, 'alert');
    showMessage('test');

    expect(stub.getCall(0).args[0]).to.equal('test');
    stub.restore();
  });

});

describe('getDay()', () => {
  const currDay = days[new Date().getDay()];

  it('shouldn\'t be undefined for empty arguments', () => {
    expect(getDay()).not.to.be.undefined;
  });

  it('should return ' + currDay, () => {
    expect(getDay()).to.equal(currDay);
  });

});

describe('getAdultUsers()', () => {

  it('should should return array of objects which are bigger then 18', () => {
    expect(getAdultUsers([{age: 20}, {age: 18}])).to.eql([{age: 20}]);
  });

});
