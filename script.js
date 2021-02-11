// Promisses
// ==============================================================================

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    // const error = true;

    if (!error) {
        resolve('Yes! Resolved the promise!');
    } else {
        reject('No! Rejected the promise!');
    }
});

// console logging Promise obj here returns the state of the promise
// not an actual value 
// console.log(myPromise);

// myPromise
// .then(value => {
//     return value + 123;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.log(err);
// });

// -----------------------------------------------------------
// simulating how fetch and its delay works with a setTimeout
const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('My Next Promise resolved!');
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});

