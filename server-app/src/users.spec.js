import { expect } from 'chai';
import sinon from 'sinon';
import { getUsers } from './users';

describe('getUsers', () => {
  it('should call fetch() method', (done) => {
    const fakeFetch = sinon.stub(window, 'fetch');
    const fakeLog = sinon.stub(console, 'log');

    //fakeFetch.returns(new Promise((resolve) => resolve()));
    fakeFetch.returns(Promise.resolve({
      json() { return 'test'; }
    }));

    getUsers()
      .then(() => {
        expect(fakeLog.called).to.be.true;
        done();
      });

    expect(fakeFetch.called).to.be.true;

  });
})
