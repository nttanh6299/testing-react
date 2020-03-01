// function sum(a, b) {
//   return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toEqual(3);
// });

// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const n = 0;
//   expect(n).not.toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('2 + 2', () => {
//   const n = 2 + 2;
//   expect(n).toBeGreaterThan(3);
//   expect(n).toBeGreaterThanOrEqual(3.5);
//   expect(n).toBeLessThan(5);
//   expect(n).toBeLessThanOrEqual(4.5);
//   expect(n).toBeCloseTo(4.0000000000001);
// });

// test('there is no I in "team"', () => {
//   expect('team').not.toMatch(/I/);
// });
// test('but there is a "stop" in "Christoph"', () => {
//   expect('Christoph').toMatch(/stop/);
// });

/*
beforeEach: first of each test function
afterEach: after each test function ran

beforeAll: beginning of the file
afterAll: end of file

*** beforeEach at top level will be executed before beforeEach inside the describe block
*** afterEach wont
Ex:
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
*/
