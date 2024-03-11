console.log(1);
const result = setTimeout(() => write20nConsoleAndReturn(() => {}), 200);
function write20nConsoleAndReturn(callbackfunction) {
  console.log(2);
  callbackfunction("Procedure completed");
}
