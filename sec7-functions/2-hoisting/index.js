// 2 ways to define a func
// hoisting is the process of moving func declarations to the top of the file

walk(); // will run
// 1. func declaration
function walk() {
    console.log('walk');
}

// 2. func expression
run(); // will give error

let run = function() {
    console.log('run');
};

let move = run; // remmeber funcs are objs and objs are copied by their reference, so move and run point to the same memory location. if u change move, so will run
run();
move();
