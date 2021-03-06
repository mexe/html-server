Simple web server for html developer
===========

Web server for html developer under node.js.

## Installation

```bash
$ npm install html-server
```

## Usage
* Firstly you should make some configuration in file server.conf.json:
```json
{
	"paths": { // Local path for static data
		"css": ["/js", "/prod/js"],
		"images": ["/i", "/prod/i"],
		"js": ["/js", "/prod/js"],
		"dummy": ["/dummy", "/prod/dummy"]
	},
	"port": "3128", // Web server port
	"router": { // Main router for html pages
		"pages": {
			"rule": "/pages/:page",
			"path": "./prod/pages",
			"ext": "html"
		}
	}
}
```
* Then run command: `node server.js`

Your server will be available at `http://localhost:<port>`.


##Features

* HTML pages routing. You can set diffent rules for routing;
* GET parameters parser. You can use these parameters:
* `time` — emulates server delay. It useful for preloaders and ajax queries.
Example: `http://localhost:3128?time=1000` emulates one second delay.