const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
});
//fetch is a bit special
// you need two .then's 1. to format it as a json; 2. to get the data;
//thus we need to add first .then here.
const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json());


Promise.all([promise1, promise2, promise3, promise4])
  .then(function(values) {
    console.log(values)
  });