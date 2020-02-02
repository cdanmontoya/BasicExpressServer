const Hello = require('./hello');

describe('Basic tests', () => {
  it('Should have message property', (done) => {
    const res = Hello.sayHello();
    expect(res).toHaveProperty('message');
    done();
  });

  it('Should retrieve a Hello world! as a message', (done) => {
    const res = Hello.sayHello();
    expect(res.message).toBe('Hello world!');
    done();
  });
});
