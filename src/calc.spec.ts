import Calc from "./calc";
import Trigonometry from "./trigonometry";


describe('Testing Calc', () => {

  const sut = new Calc();

  test('2 + 3 must be 5', () => {
    expect(sut.sum(2, 3)).toBe(5);
  });

  test('16 - 8 must be 8', () => {
    expect(sut.sub(16, 8)).toBe(8);
  });

  test('64 / 2 must be 32', () => {
    expect(sut.div(64, 2)).toBe(32);
  });

  test('32 / 0 should return an Error', () => {
    const err = new Error("Division by zero");
    expect(() => sut.div(32, 0)).toThrow(err);
  });

  test('The area of ​​the circle with radius 3 must be 11', () => {
    expect(sut.circleArea(3)).toBe(11);
  });

});