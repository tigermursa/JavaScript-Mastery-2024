# Module 1 : Path to machine code

## Video -2/5 : Interpreted vs Compiled vs JIT ?

### Interpretation

Interpreter goes line by line in source code and executes in on the go.
In interpretation, code is translated and executed line by line.

### Compilation

When compiling , entire code is converted to machine code , after that it generates a executable file that can be run by machine.
compilation involves translating the entire code before executing it, in contrast to interpretation which translates and executes code line by line.

### Just in time Compiled = JIT

Use a mixture of interpretation and compilation

#### from ChatGpt:

JIT stands for Just-In-Time compilation. It's a hybrid approach that combines elements of interpretation and compilation. Here's a brief overview:

Translation on-the-fly: With JIT compilation, the code is not translated all at once like in traditional compilation. Instead, portions of the code are translated into machine code as needed during program execution.

Execution: The translated code is then executed. This allows for optimizations to be applied based on the actual usage patterns of the program.

## Summary of the video

Interpretation = Front end developer ;
Compilation = Back end developer;
JIT = Full stack developer 😎

So, JavaScript uses JIT so that code can start immediately. When it needs optimization, it undergoes compilation. This is called JIT

Interpreter > Profiler > Compiler > Optimizer > Bytecode
