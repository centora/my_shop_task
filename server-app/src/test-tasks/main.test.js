import chai from 'chai';
const { expect } = chai;
import sinon from 'sinon';
import { days, defaultProduct, users } from './constants';
import {showMessage, getDay, getAdultUsers, getRandomUsers, Product} from './main';

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
    expect(getDay()).to.be.a('string', currDay);
  });

});

describe('getAdultUsers()', () => {

  it('should have empty array by default', () => {
    expect(getAdultUsers([])).to.be.an('array').that.is.empty;
  });

  it('should have empty array by default', () => {
    expect(getAdultUsers(users)).to.be.an.instanceof(Array);
  });

  it('should should return array of objects which are bigger then 18', () => {
    expect(getAdultUsers([{age: 16}, {age: 20}, {age: 18}, {age: 25}])).to.eql([{age: 20}, {age: 25}]);
  });

});

describe('getRandomUsers()', () => {

  it('should take array as params', () => {
    expect(users).to.be.an('array');
  });

  it('should return false if no users', () => {
    expect(getRandomUsers()).to.be.false;
  });

  it('should generate return from firstChild to middleUser of array', () => {
    const stubRandom = sinon.stub(Math, 'random').returns(0.7);
    getRandomUsers(['a', 'b', 'c', 'd']);

    expect(getRandomUsers(['a', 'b', 'c', 'd'])).to.eql(['a', 'b']);
    stubRandom.restore();
  });

  it('should generate return from middleUser to lastChild of array', () => {
    const stubRandom = sinon.stub(Math, 'random').returns(0.3);
    getRandomUsers(['a', 'b', 'c', 'd']);
    expect(getRandomUsers(['a', 'b', 'c', 'd'])).to.eql(['c', 'd']);
    stubRandom.restore();
  });

});

describe('class Product', () => {
  let product;

  beforeEach(() => {
    product = new Product();
  });

  it('should set title on creation', () => {
    const title = 'Lemon';
    const product = new Product(title);

    expect(product.title).to.equal(title);
  });

  it('should have default title value', () => {
    expect(product.title).to.equal('Apple');
  });


  it('should set price on creation', () => {
    const price = 20;
    product.price = price;

    expect(product.price).to.equal(price);
  });

  it('should have default price value', () => {
    expect(product.price).to.equal(10);
  });

  it('should get price with currency \'$\'', () => {
    expect(product.getPrice()).to.equal(product.price + '$');
  })

  it('should throw error if no value', () => {
    expect(product.setPrice).to.throw('Price should be defined');
  });

  it('should set value if value > 10', () => {
    const priceValue = 15;
    product.setPrice(priceValue)
    expect(product.value).to.equal(priceValue);
  })

});
