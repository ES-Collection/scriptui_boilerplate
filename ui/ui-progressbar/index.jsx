SimpleProgress = this.SimpleProgress = function  (opt) {
  var u;
  var opt = opt || {};

  var w = new UI("window", {minimizeButton:false});
  this.win = w.win;
  this.bar = this.win.add('progressbar', u, 0, 100);
  if (opt['size']) {
    this.bar.preferredSize = opt['size'];
  }
  this.win.show();
  this.unit = 100 / (opt['end']-1);
} 


UI.prototype.add_progressbar = function (elm, opt) {
  var u;
  var opt = opt || {};

  var progressbar = elm.add('progressbar', opt['bounds'] || u, opt['minvalue'] || 0, opt['maxvalue'] || 100, {
    // creation_properties
    name: opt['name'],
  });
  if (opt['size']) {
    progressbar.preferredSize = opt['size'];
  }
  return progressbar
};

