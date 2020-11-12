var request = require("postman-request");

const output = (script, language, stdin, callback) => {
  var program = {
    script,
    language,
    stdin,
    versionIndex: "0",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };

  request(
    {
      url: "https://api.jdoodle.com/v1/execute",
      method: "POST",
      json: program,
    },

    function (error, response, body) {
      if (error) {
        callback(error, undefined);
      } else {
        callback(error, {
          statusCode: response && response.statusCode,
          body: body,
        });
      }
      //   console.log("error:", error);
      //   console.log("statusCode:", response && response.statusCode);
      //   console.log("body:", body);
    }
  );
};

module.exports = output;
