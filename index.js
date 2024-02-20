#!/usr/bin/env node

const fs = require("fs");
const { Command } = require("commander");
const { globSync } = require("glob");
const listClasses = require("list-css-classes");
const { basename } = require("path/win32");

var filesChecked = [];
var cssClasses;
var search;

function commaList(value) {
    return value.split(",");
}
const program = new Command();
program.name("index.js");
program.description("Get a list of css classes\nThis should be run to ignore stderr ie: ./index.js 2>/dev/null");
program.option("--file-extensions <list>", "List of file extensions to look in separated by a comma", commaList, ["css"]);
program.option("--paths <list>", "List of paths to look for files in separated by a comma", commaList, ["./css/"]);
program.option("--files-checked", "Get a list of files checked for css classes", true);
program.parse();
const opts = program.opts();

opts.paths.forEach(function(value) {
    search = value + "*." + opts.fileExtensions.join(",");
    if (opts.fileExtensions.length > 1) {
        search = value + "*.{" + opts.fileExtensions.join(",") + "}";
    }
    globSync(search).forEach(function(value) {
        filesChecked.push(basename(value));
        cssClasses = listClasses({ css: fs.readFileSync(value).toString() }).sync().classNames; 
    });
});

result = {};
if (opts.filesChecked) {
    result.filesChecked = filesChecked;
}
result.cssClasses = cssClasses;
process.stdout.write(JSON.stringify(result) + "\n");
process.exit(0);
