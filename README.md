# scriptui boilerplate

## usage

~~~
#include '/PATH/TO/ui/index.jsx'
var ui = new UI('dialog', {title: "optional"});
var win = ui.win;

ui.add_text(win, {text: "hello", name:"poo"});
win.show();
~~~

see `ui/example.jsx` for more.


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

optional methods with 'ui/ui-progressbar/index.jsx'

- add_progressbar


see `ui/ui-progress/example.jsx` and `ui/ui-progress/example-simple-progressbar.jsx` for example.

---

optional methods with 'ui/ui-graphics/index.jsx'

- def_bgcolor
- def_fgcolor
- def_font

see `ui/ui-graphics/example.jsx` for example.
