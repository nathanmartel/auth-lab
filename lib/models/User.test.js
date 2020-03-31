require('dotenv').config();

const User = require('./User');

describe('User model', () => {
  it('hashes password', () => {
    const user = new User({
      username: 'test',
      password: 'testTest'
    });
    expect(user.passwordHash).toEqual(expect.any(String));
    expect(user.toJSON().password).toBeUndefined();
  });

  it('creates an auth token', () => {
    const user = new User({
      username: 'test',
      password: 'testTest'
    });
    const token = user.authToken();
    expect(token).toBeTruthy();
  });


});
