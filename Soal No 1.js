let baris = 8;
let hasil = []
for (let i = baris; i >= 1; i--) {
    let number = []
    for (let j = 1; j <i ; j++) {
        number.push(' ');
    }
    let k = baris-number.length;

    for (let l = 1; l <= k; l++) {
        number.push(' *')
    }
    hasil.push(number.join(''))
}

for (let i = 0; i < hasil.length; i++) {
    console.log(hasil[i])
}