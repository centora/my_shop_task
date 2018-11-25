import { expect } from 'chai';
import Person from './Person';

describe('class Person', () => {
  let person;

  beforeEach(() => {
    person = new Person();
  });

  it('should set name on creation', () => {
    const name = 'test';
    const person = new Person(name);

    expect(person.name).to.equal(name);
  });

  it('should have default value', () => {
    expect(person.name).to.equal('John');
  });

  it('should set creation', () => {
    expect(person.creation).to.be.instanceOf(Date);
  });

  it('should return "night child" if hour 23', () => {
    person.creation.setHours(23);
    expect(person.getCreation()).to.equal('night child');
  });

  it('should return "morning child" if hour 23', () => {
    person.creation.setHours(7);
    expect(person.getCreation()).to.equal('morning child');
  });

  it('should return "day child" if hour 23', () => {
    person.creation.setHours(18);
    expect(person.getCreation()).to.equal('day child');
  });

  it('should return "evening child" if hour 23', () => {
    person.creation.setHours(20);
    expect(person.getCreation()).to.equal('evening child');
  });

});
