# Module 1 : Path to machine code

## Video - 5/5 :What Does "Single Thread" Means And What Are Its Limitations?.

### Is JavaScript single-threaded? Can JavaScript handle asynchronous work? If yes, then how?

Yes, JavaScript is single-threaded.
However, it can handle asynchronous work through mechanisms like callbacks, promises, and async/await syntax.
These allow non-blocking execution, enabling JavaScript to manage concurrent tasks without freezing the main thread.

## Summary of the class

JavaScript operates as a single-threaded language, executing functions in a call stack with a last-in, first-out order. This means if one function takes a considerable time, it can block subsequent functions. To overcome this limitation, web APIs are introduced, allowing asynchronous execution and preventing the entire program from getting stuck. In our next class, we'll explore the details of web APIs and the event loop that manages asynchronous operations in JavaScript.
