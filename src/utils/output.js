var request = require("postman-request");


async function output(script, language, stdin) {
  var program = {
    script,
    language,
    stdin,
    versionIndex: "0",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };

  // Return new promise
  return new Promise(function (resolve, reject) {
    // Do async job
    request(
      {
        url: "https://api.jdoodle.com/v1/execute",
        method: "POST",
        json: program,
      },
      function (err, response, body) {
        if (err) {
          reject(err);
        } else {
          resolve({ statusCode: response && response.statusCode, body: body });
        }
      }
    );
  });
}
module.exports = output;
