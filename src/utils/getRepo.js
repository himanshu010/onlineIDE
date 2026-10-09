var request = require("postman-request");

// GITHUB_API_URL points local test runs at a stand-in; production leaves it unset.
const GITHUB_API = process.env.GITHUB_API_URL || "https://api.github.com";

async function getRepo(username, repo, structure, token) {
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
        GITHUB_API + "/repos/" +
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
