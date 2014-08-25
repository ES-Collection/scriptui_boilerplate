#target "InDesign-7.0"
#include "../index.jsx"

var ui = new UI('window');
var win = ui.win;

ui.add_panel(win, {title:'xxx', name:"panel"});
ui.add_group(win, {name:"group"});
ui.add_text(win, {text:"xxx", name:"static"});
ui.add_input(win, {text:"xxx", name:"input"});
ui.add_radiobutton(win, {text:"xxx", name:"radiobtn"});
ui.add_checkbox(win, {text:"xxx", name:"checkbox"});
ui.add_button(win, {tex:"xxx", name:"ok"});

win.show();