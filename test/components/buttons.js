var phantomcss = require('phantomcss');
phantomcss.init({
  screenshotRoot: './phantomcss/screenshot',
  failedComparisonsRoot: './phantomcss/failures',
  comparisonResultRoot: './phantomcss/results',
  outputSettings: {
    errorColor: {
      red: 255,
      green: 255,
      blue: 0
    },
    errorType: 'movement',
    transparency: 0.3
  }
});

casper.test.begin('Form elements testing', 1, function (test) {
  casper.on('error', function (err) {
    this.die('PhantomJS has errored: ' + err);
  });

  casper.on('resource.error', function (err) {
    casper.log('Resource load error: ' + err, 'warning');
  });

  casper.start('http://localhost:3000/pages/form-elements.html');

  casper.viewport(1024, 768);

  casper.then(function () {
    phantomcss.screenshot('#smallButtons .hb-button.normal', 'hb-button-normal');
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
