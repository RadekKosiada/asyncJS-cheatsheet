async function init() {
  console.log("init() fired")
  //await waits for asynchronous process to complete
  await createPost({title: "Post 3"})
  // this function will be called first when createPost() is done;
  getPosts();
}

init();

//with fetch

async function fetchPhotos() {
  const res = await fetch('http://jsonplaceholder.typicode.com/photos');

  const data = await res.json();

  console.log(data);
}

fetchPhotos();

// https://www.youtube.com/watch?v=PoRJizFvM7s