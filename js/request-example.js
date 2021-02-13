const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);

    const jsonResponse = await response.json();

    console.log(jsonResponse.value.joke);
};

requestJoke('Chuck', 'Norris');

