// const users = fetch('https://jsonplaceholder.typicode.com/users');

// console.log(users);

const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        data.forEach(user => {
            console.log(user);
        });
    });

// line below get executed and doesnot wait for the promise in fetch to complete
console.log(users);