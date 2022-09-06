const text = async () => {
    let response = await fetch("https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise");
    console.log(response.status);
};