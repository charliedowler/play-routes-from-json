var routesToJSON = require('./');
var fs = require('fs');

function testFailed(err) {
  throw new Error(err);
}

// TODO: Setup proper tests
fs.readFile('testRoutes.json', function(err, data) {
  var parsed = JSON.parse(data.toString());
  var result = routesToJSON(parsed.routes);

  process.exit(0);
});
