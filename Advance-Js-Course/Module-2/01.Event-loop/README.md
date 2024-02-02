# Module 2 : The inner working of JavaScript

## Video - 1/6 :What The Heck Is An Event Loop?. ( Traffic Police of out code)

### In formal short

An event loop in JavaScript is a mechanism that continuously checks and processes events in the program, allowing asynchronous tasks to be executed without blocking the main execution thread. It ensures non-blocking behavior by handling events and callbacks in a loop, allowing the program to remain responsive.

### In casual short

In simple terms, an event loop in JavaScript is like a traffic cop for your code. It makes sure that different tasks (events) can happen independently without causing a traffic jam. It keeps your program running smoothly by handling tasks in the background while the main part of your code stays responsive

### cycle

Code starts running > Synchronous tasks are executed > Asynchronous tasks are scheduled for later execution
Event loop waits for events to occur > When an event occurs, the associated task is added to the queue.
Tasks in the queue are executed one by one.
Steps 4-6 are repeated, allowing asynchronous tasks to be handled without blocking the main code.

## What is micro task queue and callback Queue ?

The micro task queue is used for handling small, high-priority tasks like Promise callbacks,
while the callback queue is used for larger, lower-priority tasks such as callbacks from timers or I/O operations.
The event loop processes micro tasks before callbacks, ensuring that higher-priority tasks are executed promptly.
Understanding this distinction is important for managing the order of execution in asynchronous JavaScript code.

The micro task queue is for quick, important jobs like Promise callbacks. 
The callback queue is for bigger, less urgent tasks like timer or I/O callbacks. 
The event loop tackles micro tasks first, making sure important things happen fast. 
Knowing this helps handle the order of execution in async JavaScript code
