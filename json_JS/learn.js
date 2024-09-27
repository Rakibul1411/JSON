let student = {
  name: 'goni',
  age: 20,
};

let str = '{"name": "goni", "age": 20}';

let ans = JSON.stringify(student);
console.log(ans);

let result = JSON.parse(str);
console.log(result);