const capitalize = require('./lib')

describe('capitalize', () => {
  test('capitalize a simple sentence', () => {
    expect(capitalize('hey there')).toEqual('Hey there');
  });
  test('Only first letter is capitalized, not the others', () => {
    expect(capitalize("HEy There")).toEqual("Hey there");
  });
});
