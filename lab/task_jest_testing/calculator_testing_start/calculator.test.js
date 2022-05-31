const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 6130;
    actual = sum(4290, 1840);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -420;
    actual = sum(-150,-270);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 3;
    actual = subtract(8, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 6224;
    actual = subtract(8679, 2455);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 120;
    actual = subtract(-150,-270);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 10;
    actual = subtract(10,0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 7438860;
    actual = multiply(4290, 1734);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 2700;
    actual = multiply(-10,-270);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(10,0);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 4;
    actual = divide(8, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 20;
    actual = divide(134340, 6717);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 7;
    actual = divide(-63,-9);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('modulus has no remainder so 0', ()=> {
    expected =0;
    actual = modulus(8,4);
    expect(actual).toBe(expected);
  })

  test('modulus has a remainder so returns value', ()=> {
    expected =3;
    actual = modulus(24,7);
    expect(actual).toBe(expected);
});
})

describe('even', () => {

  test('if even returns true',()=> {
    expect(even(6)).toBeTruthy();
  })
  test('if odd returns false', ()=> {
    expect(even(7)).toBeFalsy();
  })

});

describe('odd', () => {

  test('if odd return true',()=> {
    expect(odd(91)).toBeTruthy();
  })
  test('if even return false', ()=> {
    expect(odd(24)).toBeFalsy();
  })
});
