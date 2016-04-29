var request = require('request');
var async = require('async');
var fs = require('fs');
var path = require('path');
var folderPath = path.normalize(process.cwd() + '/phantomcss/failures/');
var uploadUrl = 'http://uploads.im/api';

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
var result = [];
if (!fs.existsSync(folderPath)) {
  process.exit(0);
  return;
}
var files = fs.readdirSync(folderPath);
for (var i in files) {
  if (files.hasOwnProperty(i)) {
    var name = path.normalize(folderPath + '/' + files[i]);
    result.push(name);
  }
}
var fileCount = result.length;
if (fileCount) {
  console.error(fileCount, 'files found');
  async.each(result, function (file, cb) {
    request.post({
      url: uploadUrl,
      formData: {
        attachments: fs.createReadStream(file)
      }
    }, function (err, res, body) {
      if (err) {
        return cb(err);
      }
      var response = JSON.parse(body);
      console.error(file.replace(folderPath, ''), response.data.img_view);
      return cb();
    });
  }, function (err) {
    if (err) {
      console.error(err);
    }
    process.exit(fileCount);
  });
}
