const request = require("request-promise-native");

/** request(
  "http://localhost:8080/api/estudiantes",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body);
  }
);
*/
async function main() {
  const options = {
    method: "GET",
    uri: "http://localhost:8080/api/estudiantes",
    json: true
  };
  try {
    const body = await request(options);
    for (estudiante of body) console.log(estudiante);
  } catch (err) {
    console.log(err);
  }
}
main();
