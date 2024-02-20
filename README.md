# CSS Classes

Get a list of CSS classes in json format for use in your friendly [PDE](https://youtu.be/QMVIJhC9Veg)

## Development Installation

To use the lock file: `npm ci` or to update the lockfile `npim i`.

### Current options

```
Usage: index.js [options]

Get a list of css classes
This should be run to ignore stderr ie: ./index.js 2>/dev/null

Options:
  --file-extensions <list>  List of file extensions to look in separated by a comma (default: ["css"])
  --paths <list>            List of paths to look for files in separated by a comma (default: ["./css/"])
  --files-checked           Get a list of files checked for css classes (default: true)
  -h, --help                display help for command
```

### Todo

- Basic Tests
- Make it a proper package.
