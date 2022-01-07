const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Joanne', 7, 'gmail', '789');

    expect(manager.name).toBe('Joanne');
    expect(manager.officeNumber).toBe('789');
});

test('get manager officeNumber', () => {
    const manager = new Manager('Joanne', 7, 'gmail', '789');
    expect(manager.getOfficeNumber()).toBe('789');
});

test('get manager role', () => {
    const manager = new Manager('Joanne', 7, 'gmail', '789');
    expect(manager.getRole()).toBe('Manager');
});