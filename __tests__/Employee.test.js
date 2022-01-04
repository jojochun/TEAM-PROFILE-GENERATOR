
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Joanne');

    expect(employee.name).toBe('Joanne');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('name@gmail.com')
});

test('get employee name', () => {
    expect(employee.getName()).toBe('Joanne');
});

test('get employee id', () => {
    expect(employee.toEqual(expect.any(Number));
});

test('gets employee email', () => {
    expect(employee.getEmail()).toBe('name@gmail.com');
});