var test    = require('tape'),
    estktap = require('estktap');
    path    = require('path')

test('scriptui-test',function(t){
  estktap('window test', path.join(__dirname, '/new-win-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('button test', path.join(__dirname, '/add-button-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('checkbox test', path.join(__dirname, '/add-checkbox-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('edittext test', path.join(__dirname, '/add-edittext-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('panel test', path.join(__dirname, '/add-panel-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('group test', path.join(__dirname, '/add-group-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('radiobutton test', path.join(__dirname, '/add-radiobutton-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });


  // UI Graphics Test
  estktap('uifont test', path.join(__dirname, '/graphics/set-font-test.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  estktap('input foreground background test', path.join(__dirname, '/graphics/set-input-bgfg.jsx'), function (d) {
    t.true(d, 'should be true');
  });

  t.end();
});

