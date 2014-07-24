#target "indesign"
#targetengine "progress.bar"
#include "../../ui/index.jsx"
#include "./index.jsx"

var contents = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var pb = new UI("window", {title:"Progress...");
var progress = pb.win;

pb.add_progressbar(progress, {name:'bar'});
pb.add_text(progress, {name:'label'});

progress.show();
var unit = progress['bar'].maxvalue/(contents.length-1);
for (var i=0, len=contents.length; i < len ; i++) {
  progress['bar'].value = unit * i;
  progress['label'].text = contents[i];
  progress.update();
  $.sleep(10);
}
alert("Done.");
progress['bar'].value = 0;
progress.close();