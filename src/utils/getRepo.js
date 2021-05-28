var base64 = require("js-base64").Base64;
var request = require("postman-request");

const getRepo = (username, repo, structure, callback) => {
  request(
    {
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
      console.log(
        "https://api.github.com/repos/" +
          username +
          "/" +
          repo +
          "/contents" +
          "/" +
          structure
      );
      //   console.log("error:", error);
      //   console.log("statusCode:", response && response.statusCode);
      //   var decoded_content = base64.decode(body.content);
      console.log(body);
    }
  );
};

module.exports = getRepo;
