#target "InDesign-7.0"
#include "./index.jsx"
$.appEncoding = "utf-8";


var ui = new UI('dialog');
var win = ui.win;

win.margins = 10;
ui.add_text(win, {text:"hello"});
ui.add_panel(win)
ui.add_input(win, {text:"HELLO\nWORD", multiline:true, noecho:false, name:"pooo"});

win['pooo'].onClick = function () {
  alert(this.text); //=> "HELLO\nWORD"
}

ui.add_listbox(win, {size:[300,100], 
  multiselect: true, 
  numberOfColumns:2, 
  columnTitles: ['a','b'],
  columnWidths: [100,200],
  showHeaders:true, 
  name:"listbox"});
  
win['listbox'].add('item', "111");
win['listbox'].add('item', "222");
win['listbox'].add('item', "333");

win['listbox'].items[0].subItems[0].text = "000";
win['listbox'].items[1].subItems[0].text = "001";


ui.add_text(win, {text:"000", name:"sl_label"});
ui.add_slider(win, {name:"slider"});
win['slider'].onChanging = function () {
  win['sl_label'].text = this.value;
}

ui.add_text(win, {text:"000", name:"sc_label"});
ui.add_scrollbar(win, {name:"scrollbar"});
win['scrollbar'].onChanging = function () {
  win['sc_label'].text = this.value;
}
win.show();

