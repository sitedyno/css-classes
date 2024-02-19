const fs = require("node:fs");
const listClasses = require("list-css-classes");
var path = "";
var files = [];
var filesChecked = [];
var cssClasses = [];
var contents = "";

process.argv.forEach(function(val, index) {
    if (index > 1) {
        try {
            // files.push(fs.readdirSync(val, { withFileTypes: true }));
            files.push(fs.readdirSync(val));
        } catch (error) {
            console.log(error.message);
            exit;
        }
    }
});

if (files.length === 0) {
    path = "./css/";
    files = fs.readdirSync(path);
}

files.forEach(function(file) {
    var fullPath = path + file;
    var content = fs.readFileSync(fullPath).toString();
    contents += content;
    filesChecked.push(file);
});

results = listClasses({ css: contents })
    .then((result) => {
        if (result.classNames.length > 0) {
            cssClasses = result.classNames;
        }
    })
    .finally(function() {
        result = {
            filesChecked: filesChecked,
            cssClasses: cssClasses,
        };
        process.stdout.write(JSON.stringify(result) + "\n");
    });
