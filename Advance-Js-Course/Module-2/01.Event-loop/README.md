# Module 2 : The inner working of JavaScript

## Video - 1/6 :What The Heck Is An Event Loop?.

### In formal short

An event loop in JavaScript is a mechanism that continuously checks and processes events in the program, allowing asynchronous tasks to be executed without blocking the main execution thread. It ensures non-blocking behavior by handling events and callbacks in a loop, allowing the program to remain responsive.

### In casual short

Sure! In simple terms, an event loop in JavaScript is like a traffic cop for your code. It makes sure that different tasks (events) can happen independently without causing a traffic jam. It keeps your program running smoothly by handling tasks in the background while the main part of your code stays responsive

### cycle

Code starts running > Synchronous tasks are executed > Asynchronous tasks are scheduled for later execution
Event loop waits for events to occur > When an event occurs, the associated task is added to the queue.
Tasks in the queue are executed one by one.
Steps 4-6 are repeated, allowing asynchronous tasks to be handled without blocking the main code.
