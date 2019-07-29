const countChar = (v, s) => {
    let count = 0;
    let string = v.split('');
    string.forEach(data => {
        if (data === s) count = count + 1;
    });
    console.log(count)
};

countChar("banana", "a");
