const runChapter2 = () => {

  // Values and Types
  let a;
  console.log('typeof a should be undefined: ', typeof a);

  a = 'hello, world';
  console.log('typeof a should be string: ' + typeof a);

  a = 42;
  console.log('typeof a should be number: ' + typeof a);

  a = true;
  console.log('typeof a should be boolean: ' + typeof a);

  a = null;
  console.log('typeof a should be null but a bug renders it object: ' + typeof a);

  a = undefined;
  console.log('typeof a should be undefined: ' + typeof a);

  a = { b: 'c' };
  console.log('typeof a should be object: ' + typeof a);

  console.log("'typeof null' by virtue of a bug renders object: " + typeof null);


  // Objects
  let obj = {
    a: 'hello, world',
    b: 42,
    c: true
  };

  console.log(`obj.a: ${obj.a}`);
  console.log(`obj.b: ${obj.b}`);
  console.log(`obj.c: ${obj.c}`);

  console.log(`obj[a]: ${obj["a"]}`);
  console.log(`obj[b]: ${obj["b"]}`);
  console.log(`obj[c]: ${obj["c"]}`);


  obj = {
    a: "hello, world",
    b: 42
  };

  let b = 'a';

  console.log(`obj[b]: ${obj[b]}`) // "hello world"
  console.log(`obj["b"]: ${obj["b"]}`) // 42

  // Arrays
  let arr = [
    "hello, world",
    42,
    true
  ]

  console.log("arr[0]: " + arr[0]); // "hello, world"
  console.log(`arr[1]: ${arr[1]}`); // 42
  console.log(`arr[2]: ${arr[2]}`); // true
  console.log(`arr.length: ${arr.length}`) // 3

  // Functions
  const foo = () => 42;
  foo.bar = "hello, world";

  console.log(`typeof foo: ${typeof foo}`); // function
  console.log(`typeof foo(): ${typeof foo()}`); // number
  console.log(`typeof foo.bar: ${typeof foo.bar}`); // string 

  // Built-In Type Methods
  a = "hello, world";
  b = 3.14159;

  console.log(`a.length: ${a.length}`)
  console.log(`a.toUpperCase: ${a.toUpperCase()}`)
  console.log(`b.toFixed(): ${b.toFixed(4)}`)

  // Comparing Values
  a = "42"
  b = Number(a)
  console.log(a) // "42"
  console.log(b) // 42 the number

  b = a * 1 // implicit coercion to number type
  console.log(`typeof b: ${typeof b}`)

  // Truthy and Falsy
  "" ? console.log(`"" is truthy`) : console.log('"" is falsy')

  0 ? console.log(`0 is truthy`) : console.log(`0 is falsy`)

  -0 ? console.log(`-0 is truthy`) : console.log(`-0 is falsy`)

  NaN ? console.log(`NaN is truthy`) : console.log(`NaN is falsy`)

  null ? console.log(`null is truthy`) : console.log(`null is falsy`)

  undefined ? console.log(`undefined is truthy`) : console.log(`undefined is falsy`)

  false ? console.log(`false is truthy`) : console.log(`false is falsy`)

  "hello" ? console.log(`"hello" is truthy`) : console.log('"hello" is falsy')

  42 ? console.log(`42 is truthy`) : console.log(`42 is falsy`)

  true ? console.log(`true is truthy`) : console.log(`true is falsy`)

  arr = []
  arr ? console.log(`[null] is truthy`) : console.log(`[null] is falsy`)


  [1, "2", 3] ? console.log(`[1, "2", 3] is truthy`) : console.log(`[1, "2", 3] is falsy`)

  obj = {}
  obj ? console.log(`{} is truthy`) : console.log(`{} is falsy`)

  obj = {a: 42} 
  obj ? console.log(`{a: 42} is truthy`) : console.log(`{a: 42} is falsy`)

  foo ? console.log(`foo function is truthy`) : console.log(`foo function is falsy`)

}
export default runChapter2;