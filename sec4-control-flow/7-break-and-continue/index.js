// break
let i = 0;

while (i <= 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}

// continue
let x = 0;

// prints only the odd numbers
while (x <= 10) {
    if (x % 2 === 0) {
        x++;
        continue;
    }
    console.log(x);
    x++;
}



