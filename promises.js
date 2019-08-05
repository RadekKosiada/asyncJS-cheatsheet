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
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      posts.push(post);     
      
      const error = false;

      if(!error) {
        resolve();
      } else {
        reject("Oops!")
      }
    }, 2000)
  }) 
}

// //first createPost() is running;
// createPost({title: "Post 3"})
// //if it's successful, if it's done, getPosts is called
// .then(getPosts)
// // if error is true, than it will log 'Ooops'
// .catch(err=> console.log(err))


//ANOTHER EXAMPLE

function sleep(amount) {
  return new Promise((resolve, reject) => {
    if(amount <= 300) {
      return reject ("That's too fast");
    }
    setTimeout(()=> resolve(`Slept for ${amount}`), amount)
  })
}

sleep(500)
.then((result) => {
  console.log(result);
  return sleep(1002);
})
.then((result) => {
  console.log(result);
  return sleep(1500);
})
.then((result) => {
  console.log(result);
  console.log("Awake!")
})






