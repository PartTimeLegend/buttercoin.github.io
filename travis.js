var w3cjs = require('w3cjs');

var results = w3cjs.validate({
    file: 'index.html', // file can either be a local file or a remote file
    output: 'json', // Defaults to 'json', other option includes html
    callback: function (res) {
        console.log(res);
        // depending on the output type, res will either be a json object or a html string
    }
});
