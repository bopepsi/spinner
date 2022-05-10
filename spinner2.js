let spinner = (() => {
    for (let timer = 100; timer <= 900; timer += 200) {
        setTimeout(() => {
            if (timer === 100 || timer === 900) process.stdout.write('\r|   ');
            if (timer === 300) process.stdout.write('\r/   ');
            if (timer === 500) process.stdout.write('\r-   ');
            if (timer === 700) process.stdout.write('\r\\   ');
        }, timer);
    }
})
spinner();