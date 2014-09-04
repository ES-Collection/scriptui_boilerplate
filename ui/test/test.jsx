#target "InDesign-7.0"
#include "../index.jsx"
#include "../ui-graphics/index.jsx"

var ui = new UI('window');
var win = ui.win;

ui.add_panel(win, {title:'xxx', name:"panel"});
ui.add_group(win, {name:"group"});
ui.add_text(win, {text:"xxx", name:"static"});
ui.add_input(win, {text:"xxx", name:"input"});
ui.add_radiobutton(win, {text:"xxx", name:"radiobtn"});
ui.add_checkbox(win, {text:"xxx", name:"checkbox"});
ui.add_button(win, {tex:"xxx", name:"ok"});

ui.add_text(win, {text: 'UIGraphicTest', name: 'graphic-txt'})

var font = ui.def_font({name:"osaka",size:90, style:'bold'});
win['graphic-txt'].graphics.font = font;

var inp_bg = ui.def_bgcolor(win, {type:'solid', color:[0.3,1,0.4]});
var inp_fg = ui.def_fgcolor(win, {type:'solid', color:'yellow'});
win['input'].graphics.backgroundColor = inp_bg;
win['input'].graphics.foregroundColor = inp_fg;

win.show();