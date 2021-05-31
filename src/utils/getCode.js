var request = require("postman-request");

async function getCode(username, repo, structure, token) {
  if (token) {
    console.log("with_token");
    var b_token = "Bearer " + token;
    const options = {
      url:
        "https://api.github.com/repos/" +
        username +
        "/" +
        repo +
        "/contents" +
        "/" +
        structure,
      method: "GET",

      headers: {
        accept: "application/vnd.github.VERSION.raw",
        "User-Agent": "request",
        authorization: b_token,
      },
    };

    // Return new promise
    return new Promise(function (resolve, reject) {
      request.get(options, function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      });
    });
  } else {
    const options = {
      url:
        "https://api.github.com/repos/" +
        username +
        "/" +
        repo +
        "/contents" +
        "/" +
        structure,
      method: "GET",

      headers: {
        accept: "application/vnd.github.VERSION.raw",
        "User-Agent": "request",
      },
    };

    // Return new promise
    return new Promise(function (resolve, reject) {
      request.get(options, function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      });
    });
  }
}

module.exports = getCode;
