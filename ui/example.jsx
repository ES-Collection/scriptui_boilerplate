#target "InDesign-7.0"
#include "./index.jsx"
$.appEncoding = "utf-8";


var ui = new UI('dialog');
var win = ui.win;

win.margins = 90;
ui.add_text(win, {text:"hello"});
ui.add_panel(win)
ui.add_input(win, {text:"HELLO\nWORD", multiline:true, name:"pooo"});

win['pooo'].onClick = function () {
  alert(this.text); //=> "HELLO\nWORD"
}

win.show();

var another_ui = new UI('dialog');
var win2 = another_ui.win;
another_ui.add_listbox(win2, {items:[11111,2222,3333], multiselect: true});

win2.show();