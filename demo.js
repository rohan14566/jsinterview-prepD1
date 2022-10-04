/* <h4>What is the spread operator?</h4> */
let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]

/* <h4>What is execution context</h4> */
let X=10;
function geet(a){
  return a*10;
}
let y=geet(X);
console.log(y);
// output:100

//<h4>What is meant by first class functions</h4>
function sayHello() {
    return "Hello, ";
  }
  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }
  // Pass `sayHello` as an argument to `greeting` function
  greeting(sayHello, "JavaScript!");
  // Hello, JavaScript!

//   <h4>What are closures? Give an example of closure</h4>
  function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4

/* <h4>Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()</h4> */
// call()
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName();  

//   apply()
const pers = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  pers.fullName.apply(person1, ["Oslo", "Norway"]);

//   another example
let user = {
    firstName: "John"
  };
  
  function func() {
    alert(this.firstName);
  }
  
  let funcUser = func.bind(user);
  funcUser(); // John