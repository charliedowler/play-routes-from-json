## play-routes-from-json [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Convert your play routes file to a nicer json format

See [play-routes-to-json](https://github.com/charliedowler/play-routes-to-json) to parse a routes file to your new JSON format.

## Install
```sh
$ npm install --save play-routes-from-json
```

## Usage

```js
var routesFromJSON = require('play-routes-from-json');
var fs = require('fs');
fs.readFile('conf/routes.json', function(err, data) {
  var parsed = JSON.parse(data.toString()).routes;
  console.log(routesFromJSON(parsed));
  //=> GET       /path/to/action       @controllers.handleAction()
});
```

## License

MIT © [Charlie Dowler](http://charliedowler.com)

[npm-url]: https://npmjs.org/package/play-routes-from-json
[npm-image]: https://badge.fury.io/js/play-routes-from-json.png

[travis-url]: http://travis-ci.org/charliedowler/play-routes-from-json
[travis-image]: https://secure.travis-ci.org/charliedowler/play-routes-from-json.png?branch=master