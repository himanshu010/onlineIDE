var request = require("postman-request");

// GITHUB_API_URL points local test runs at a stand-in; production leaves it unset.
const GITHUB_API = process.env.GITHUB_API_URL || "https://api.github.com";

async function getCode(username, repo, structure, token) {
  if (token) {
    var b_token = "Bearer " + token;
    const options = {
      url:
        GITHUB_API + "/repos/" +
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
        GITHUB_API + "/repos/" +
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
