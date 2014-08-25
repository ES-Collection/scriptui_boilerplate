#target "indesign-7.0"
#include "../index.jsx"

var ui = new UI('window');
var win = ui.win;

ui.add_panel(win, {title:'xxx', name:"panel"});
win.show();
win.close();
$.writeln(win.type == 'window');
