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

another_ui.add_text(win2, {text:"000", name:"sl_label"});
another_ui.add_slider(win2, {name:"slider"});
win2['slider'].onChanging = function () {
  win2['sl_label'].text = this.value;
}

another_ui.add_text(win2, {text:"000", name:"sc_label"});
another_ui.add_scrollbar(win2, {name:"scrollbar"});
win2['scrollbar'].onChanging = function () {
  win2['sc_label'].text = this.value;
}
win2.show();

