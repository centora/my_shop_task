import chai from 'chai';
import { sum } from './tools';
const { assert, expect } = chai;

chai.should();
const test = _ => _;

describe('sum expect', function() {
  it('should return 5 from sum(2, 3)', () => {
    sum(2, 3).should.equal(5);
  });

  it('should return 2 from sum(2, 0)', () => {
    sum(2, 0).should.equal(2);
  });

  it ('test should retern argument', () => {
    let foo = 1;
    test(foo).should.equal(foo);
  })

});
