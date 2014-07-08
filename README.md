# scriptui boilerplate

## usage

~~~
#include '/PATH/TO/ui/index.jsx'
var ui = new UI('dialog', {title: "optional"});
var win = ui.win;

ui.add_text(win, {text: "hello", name:"poo"});
win.show();
~~~

see `example.jsx` for more.


## available instance methods

- add_group
- add_panel
- add_input
- add_text
- add_listbox
- add_dropdownlist
- add_checkbox
- add_radiobutton
- add_slider
- add_scrollbar
- add_button

