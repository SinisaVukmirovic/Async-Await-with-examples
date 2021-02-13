const jokeObj = {
    id: 'B5hNeNJYgFd',
    joke: 'What did the green grape say to the purple grape'
}

const postData = async (jokeObj) => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse);
};

postData(jokeObj);