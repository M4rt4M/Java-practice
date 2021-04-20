// Functions
function functionName() { //define function
  console.log("Hello World");
}

functionName(); //call function

// Multiple arguments
function functionWithArgs(x, y) {
  console.log(x+y);
}
functionWithArgs(2,9)
/* 
Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
*/

// Return values 
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5); //=25
