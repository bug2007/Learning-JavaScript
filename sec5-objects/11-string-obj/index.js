// String pirmitve
const message ='This is my first message'; // type string
message.length; // message is a string, not an obj, so how come it has properties such as 'length' and methods? because when we put the dot notation beside the 'message', it automatically turns into the String obj.
message.includes('my'); // true
message.startsWith('This'); // true
message.endsWith('e'); // true
message.indexOf('my'); // 8
message.replace('first', 'second'); // retuns a new string 'This is my second message'. doesnt modify the original one.
message.toUpperCase();
message.trim(); // removes whitespace from both ends of a string. doesnt modify the original one.
message.trimLeft();
message.trimRight();
message.split(' ');

// String object
const another = new String('This is my first message'); // type object