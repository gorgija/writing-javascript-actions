const  request  = require("request-promise")




const options = {
    method:  "GET",
    url: "http://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Learning Lab course.Visit lab.github.com or to contact us."
    },
    json: true
}

async function getJoke() {
    const req = await request(options);
    return req.joke
}

module.exports = getJoke;