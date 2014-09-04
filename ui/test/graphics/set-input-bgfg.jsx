#target "indesign-7.0"
#include "../test.jsx"

win.close();

$.writeln(
  win['input'].graphics.backgroundColor.constructor.name === 'ScriptUIBrush' &&
  win['input'].graphics.foregroundColor.constructor.name === 'ScriptUIPen'
);