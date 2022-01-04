const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Joanne');

    expect(engineer.name).toBe('Joanne');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('name@gmail.com')
});