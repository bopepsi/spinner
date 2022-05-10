let arr = ['|', '/', '-', '\\'];

let spinner = ((t) => {
    let delay = 0;
    while (t > 0) {
        for (let char of arr) {
            delay += 250;
            setTimeout(() => {
                process.stdout.write(`\r${char}`);
            }, delay);
        };
        t--;
    }
})
spinner(6);