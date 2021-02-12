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

getAllUserEmails();