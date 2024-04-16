async function fetchUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await response.json();
  return user;
}

// Usage
fetchUser(1)
  .then((user) => console.log(user.name))
  .catch((error) => console.error("Error fetching user:", error));


  /*
  async: Declares a function as asynchronous, allowing it to use await inside.
await: Pauses the execution of an async function until a promise settles, then resumes with the result.
Together, they simplify asynchronous code, making it look more like synchronous code and easier to understand and maintain.
*/