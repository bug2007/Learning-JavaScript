// 2 ways to define a func

// 1. func declaration
function walk() {
    console.log('walk');
}

// 2. func expression
let run = function() {
    console.log('run');
};

let move = run; // remmeber funcs are objs and objs are copied by their reference, so move and run point to the same memory location. if u change move, so will run
run();
move();
