var request = require("postman-request");

async function getRepo(username, repo, structure, token) {
  if (token) {
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
        "User-Agent": "request",
        authorization: b_token,
      },
    };

    // Return new promise
    return new Promise(function (resolve, reject) {
      // Do async job
      request.get(options, function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          body = JSON.parse(body);
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
        "User-Agent": "request",
      },
    };

    // Return new promise
    return new Promise(function (resolve, reject) {
      // Do async job
      request.get(options, function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          body = JSON.parse(body);
          resolve(body);
        }
      });
    });
  }
}

module.exports = getRepo;
