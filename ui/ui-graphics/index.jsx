// define background color
UI.prototype.def_bgcolor = function (elm, opt) {
  var u;
  var opt = opt || {};
  
  var type, color;
  if ((opt['type'] == 'solid') || (opt['type'] == u)) {
    type = elm.graphics.BrushType.SOLID_COLOR;
    color = UI.solid_color(opt['color']);
  }
  else {
    // TODO THEME_COLOR type
    // type = elm.graphics.BrushType.THEME_COLOR;
    // color = 'appDialogBackground';
    return null;
  }
  
  var bgcolor = elm.graphics.newBrush(
    type, 
    color
  );
  return bgcolor
};

// define foreground color
UI.prototype.def_fgcolor = function (elm, opt) {
  var u;
  var opt = opt || {};
  
  var type, color;
  if ((opt['type'] == 'solid') || (opt['type'] == u)) {
    type = elm.graphics.PenType.SOLID_COLOR;
    color = UI.solid_color(opt['color']);
  }
  else {
    // TODO THEME_COLOR type
    // type = elm.graphics.PenType.THEME_COLOR;
    // color??
    return null
  }
  
  var fgcolor = elm.graphics.newPen(
    type, 
    color, 
    (opt['stroke'] || 0)
  );
  return fgcolor
};

// define font
UI.prototype.def_font = function (opt) {
  var u;
  var opt = opt || {};
  
  var font = ScriptUI.newFont(
    opt['name'] || 'dialog',
    opt['style'] || 'regular',
    opt['size']    
  );  
  return font
};

