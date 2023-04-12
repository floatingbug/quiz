let add = require('./add');

describe('add', ()=>{
  test('should return the sum of two numbers', ()=>{
    const result = add(2, 5);

    expect(result).toBe(7)
  })
})
