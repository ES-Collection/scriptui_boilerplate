#target "indesign-7.0"
#include "../test.jsx"

win.close();

$.writeln(
  win['graphic-txt'].graphics.font.name == 'osaka' &&
  win['graphic-txt'].graphics.font.size == 90 &&
  win['graphic-txt'].graphics.font.style.toLowerCase() == 'bold' // 小文字で指定しても大文字になってる
);
