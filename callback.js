const posts = [
  { title: "Post 1" },
  { title: "Post 2" }
]
  
console.log(posts)

function getPosts() {
  setTimeout(function() {
    let ul = '';
    posts.forEach((elem, index) => {
      ul += `<li>${elem.title}</li>`
    })
    document.body.innerHTML = ul;
    console.log(ul)
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(()=> {
    //first third post will be pushed 
    posts.push(post);
    //than callback will be called in this case getPosts()
    // callback();
  }, 2000)
}

//commented out to test promises.js
// createPost({title: "Post 3"},getPosts);


// More Simple example of callback 
// And passing an argument in a callback function
function one(arg1, callback){
  console.log(arg1,"one is called");
  callback();
}

function two(arg2) {
  console.log(arg2, "two is called");
}

one("some string", two.bind(null, "some other string"));