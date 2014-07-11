#target "indesign"
#include "../../ui/index.jsx"
#include "./index.jsx"


var ui = new UI("dialog");
var win = ui.win;
win.preferredSize = [400,300];
ui.add_text(win, {text:"こんにちは\n世界", name:"txt", multiline:true});
ui.add_panel(win, {title:"hello world", size:[100,20],name:'pnl'});


var font = ui.def_font({name:"osaka",size:90, style:'bold'});

// type:'theme',color:"appDialogBackground"
var win_bg = ui.def_bgcolor(win, {color:[0.3,1,0.4]});
var txt_fg = ui.def_fgcolor(win, {color:'yellow', stroke:1});
var inp_bg = ui.def_bgcolor(win, {type:'theme'});
var inp_fg = ui.def_fgcolor(win, {type:'theme'});

win.graphics.backgroundColor = win_bg
win['txt'].graphics.font = font;
win['txt'].graphics.foregroundColor = txt_fg;
win['pnl'].graphics.backgroundColor = inp_bg;
win['pnl'].graphics.foregroundColor = inp_fg;

win.show();