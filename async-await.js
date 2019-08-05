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


// ANOTHER EXAMPLE

const urlPhotos = "http://jsonplaceholder.typicode.com/photos";
const urlPosts = "http://jsonplaceholder.typicode.com/posts";

async function getData() {
  try {
    const [photosResponse, postsResponse] = await Promise.all([
      axios.get(urlPhotos),
      axios.get(urlPosts)
    ]);
  
    const photos = photosResponse.data;
    const posts = postsResponse.data;
    console.log(posts, photos);
  } catch (err) {
    console.log(err)
  }
}

getData();

console.log("POSTS", posts);
