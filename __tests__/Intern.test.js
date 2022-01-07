const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Joanne', 7, 'me@gmail', 'uc');

    expect(intern.name).toBe('Joanne');

    expect(intern.school).toBe('uc');
});

test('get intern school', () => {
    const intern = new Intern('Joanne', 7, 'me@gmail', 'uc');
    expect(intern.getSchool()).toBe('uc');
});

test('get intern role', () => {
    const intern = new Intern('Joanne', 7, 'me@gmail', 'uc');
    expect(intern.getRole()).toBe('Intern');
});