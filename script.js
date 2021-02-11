// Promisses
// ========================================================================================

const myPromise = new Promise((resolve, reject) => {
    // const error = false;
    const error = true;

    if (!error) {
        resolve('Yes! Resolved the promise!');
    } else {
        reject('No! Rejected the promise!');
    }
});

// console logging Promise obj here returns the state of the promise not ana actual value 
console.log(myPromise);

myPromise
.then(value => {
    return value + 123;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.log(err);
});