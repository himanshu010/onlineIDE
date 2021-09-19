var request = require("postman-request");

async function getUserName(token) {
  var b_token = token;
  const options = {
    url: "https://api.github.com/user",
    method: "GET",

    headers: {
      accept: "application/vnd.github.v3+json",
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
}

module.exports = getUserName;
