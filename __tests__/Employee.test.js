

const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Joanne', 7, 'me@gmail.com');

    expect(employee.name).toBe('Joanne');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('me@gmail.com')
});

test('get employee name', () => {
    const employee = new Employee('Joanne', 7, 'me@gmail.com');
    expect(employee.getName()).toBe('Joanne');
});

test('get employee id', () => {
    const employee = new Employee('Joanne', 7, 'me@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Joanne', 7, 'me@gmail.com');
    expect(employee.getEmail()).toBe('me@gmail.com');
});