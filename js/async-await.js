const myUsers = {
    userList: []
}

// const myCoolFunction = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     const userJsonData = await response.json();

//     // console.log(userJsonData);
//     return userJsonData;
// };

// myCoolFunction();

// const anotherFunction = async () => {
//     const data = await myCoolFunction();
//     // console.log(data);

//     myUsers.userList = data;

//     console.log(myUsers.userList);
// };

// anotherFunction();
// console.log(myUsers.userList);

// ===============================
// Example 1
// ===============================
const getAllUserEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    // console.log(userEmailArray);
    // return userEmailArray;

    postToWebPage(userEmailArray);
};

// getAllUserEmails();

const postToWebPage = (data) => {
    console.log(data);
};

// getAllUserEmails();

// ======================================
// Example 2 with 2nd parameter in fetch and 2 accept types of data
// ======================================

const getDadJokes = async () => {
    const response = await fetch('https://icanhazdadjoke.com', {
        method: 'GET',
        headers: {
            Accept: 'application/json'
            // Accept: 'text/plain'
        }
    });

    const jsonJokeData = await response.json();
    // const textJokeData = await response.text();

    console.log(jsonJokeData);
};

getDadJokes();