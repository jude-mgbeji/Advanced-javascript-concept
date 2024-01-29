/**
 * HOW JAVASCRIPT WORKS
 */
/**
 * WHAT IS A PROGRAM
 * A program is a command or set of commands that tells the computer what to do.
 * In order for a program to work, it has to do some simple things;
 * 1. It has to allocate memory
 * 2. it has to parse and execute i.e read and run commands
 */
/**
 * JAVASCRIPT ENGINE
 * Every browser implements some sort of a JS engine example, the chrome browser
 * implements the V8 JS engine.
 * These engines reads the JS that we write and changes it to machine executable 
 * instructions
 * The engine consist of two parts
 * 1. Memory heap: This is where the memory allocation happens
 * 2. Call stack: This is where the code is read and executed it tells us where 
 *    we are in the program
 */
/**
 * In order for JS to run, we need more than just the JS engine.
 * We need the JS runtime environment which consist of;
 * 1. JS engine
 * 2. Web APIs e.g DOM(Documents), AJAX(httpRequests, xml), timeout(setTimeout()) etc
 * 3. Callback Queues e.g onClick(), onLoad(), onDone() etc
 * 4. Event loop
 * 5. Job Queue: This was introduced recently in ES6 with the invent of promises.
 *    It was made to help prioritize the processing of promises such that the event loop
 *    looks up to it first before going to the callback queue
 */
/**
 * Javascript is a single threaded language that can be non blocking
 * Single threaded because the engine has just one call stack i.e it can only 
 * execute one thing at a time (synchronous)
 * In order to not block the single thread, it uses callback functions. This
 * callback function uses event loop and callback queue to run in the background
 * thus, asynchronous
 */
