var phantomcss = require('phantomcss');
phantomcss.init({
  screenshotRoot: './phantomcss/screenshot',
  failedComparisonsRoot: './phantomcss/failures',
  comparisonResultRoot: './phantomcss/results'
});

casper.test.begin('breadcrumb testing', 1, function (test) {
  casper.on('error', function (err) {
    this.die('PhantomJS has errored: ' + err);
  });

  casper.on('resource.error', function (err) {
    casper.log('Resource load error: ' + err, 'warning');
  });

  casper.start('http://localhost:3000/pages/breadcrumb.html');

  casper.viewport(1024, 768);

  casper.then(function () {
    phantomcss.screenshot('ul.hb-breadcrumb', 'hb-breadcrumb');
  });

  casper.then(function () {
    phantomcss.compareAll();
  });

  casper.run(function () {
    phantomcss.getExitStatus();
    test.done();
    casper.test.done();
    casper.exit();
  });
});
