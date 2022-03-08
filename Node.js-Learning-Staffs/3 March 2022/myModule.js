exports.sayHello = function (name) {
  return "Hello " + name;
};

exports.sayHi = function (name) {
  return "Hi " + name;
};

exports.sumAll = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
