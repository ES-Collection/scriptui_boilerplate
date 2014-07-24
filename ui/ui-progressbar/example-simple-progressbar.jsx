#target "indesign"
#include "../../ui/index.jsx"
#include "./index.jsx"

var contents = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, ",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "Ut enim ad minim veniam, ",
  "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  "Excepteur sint occaecat cupidatat non proident, ",
  "sunt in culpa qui officia deserunt mollit anim id est laborum."].join("");

progress = new SimpleProgress({size: [230,2], engine:"progress.bar", end:contents.length});
for (var i=0, len=contents.length; i < len ; i++) {
  progress.bar.value = i * progress.unit;
  progress.win.update();
};

alert("Done");