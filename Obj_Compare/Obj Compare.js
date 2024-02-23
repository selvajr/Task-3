const object1 = { name: 'Person 1', age: 5 };
const object2 = { age: 5, name: 'Person 1' };

const areEqual = JSON.stringify(object1) === JSON.stringify(object2);
console.log(areEqual);

