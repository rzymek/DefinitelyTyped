#!/usr/bin/env node
declare function require(s:string):any;
declare var process:any;

var _ = require("./lodash");
var fs = require("fs");

var EXCLUDE = ['flip'];
var stdin = process.stdin,
    stdout = process.stdout,
    input = "";

stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
    input += chunk;
});

stdin.on('end', function () {
    var jsdoc = JSON.parse(input);
    var reader = fs.createReadStream('prefix.ts');
    reader.pipe(stdout);
    reader.on('close', () => {
        stdout.write('\n//===============================\n')
        _.chain(jsdoc)
            .filter(entry => _.has(entry, 'examples'))
            .reject(entry => _.includes(EXCLUDE, entry.name))
            .map((entry, idx) =>
                _(entry.examples).map(example => `
                    function ${entry.name}${idx}() {
                        ${example}
                    }
                `).join('\n')
            ).forEach(block => stdout.write(block))
            .value();
    });
});
