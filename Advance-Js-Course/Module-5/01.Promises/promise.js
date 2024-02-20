const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Shob thik ache");
  } else {
    reject("Shob haralam");
  }
});

//promise.then(console.log)
//promise.then((res) => console.log(res));
// promise
// .then((res) => res + "kintu ami thik nai")
// .then(res2 => console.log(res2))
// .catch(err => console.log(err))

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Hello"), 500);
});

console.log(promise1);

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("world"), 3000);
});

console.log(promise2);

Promise.all([promise1, promise2])
  .then((values) => console.log(values))
  .catch((error) => console.log("error", error));
