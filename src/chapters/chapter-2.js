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
  
}
export default runChapter2;