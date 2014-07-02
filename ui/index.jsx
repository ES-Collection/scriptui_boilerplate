UI = this.UI = function (type, opt) {
  var u;
  var opt = opt || {};
  if (type !== 'dialog') {
    #targetengine opt['engine'] || "session"
  }
  
  // window
  this.win = new Window(type, opt['title'] || "", opt['bounds'] || u, {
    closeButton: (opt['closeButton'] == u ? true : opt['closeButton']),
    minimizeButton: (opt['minimizeButton'] == u ? true : opt['minimizeButton']),
    maximizeButton: (opt['maximizeButton'] == u ? false : opt['maximizeButton']),
    resizeable: (opt['resizeable'] == u ? false : opt['resizeable']),
    borderless: (opt['borderless'] == u ? false : opt['borderless']),
  });

  this.win.orientation = 'column';
  this.win.margins = 5;
  this.win.spacing = 5;
  this.win.alignChildren = ['fill', 'fill'];
}


// group
UI.prototype.add_group = function (elm, opt) {
  var u;
  var opt = opt || {};
  var group = elm.add('group', opt['bounds'] || u, {
    // creation_properties
    name: opt['name'],
  });
  group.orientation = opt['orientation'] || this.win.orientation;
  group.margins = opt['margins'] || this.win.margins;
  group.spacing = opt['spacing'] || this.win.spacing;
  group.alignChildren = opt['alignChildren'] || this.win.alignChildren;
  return group
};

// panel
UI.prototype.add_panel = function (elm, opt) {
  var u;
  var opt = opt || {};
  var panel = elm.add('panel', opt['bounds'] || u, opt['title'] || "", {
    // creation_properties
    name: opt['name'],
    borderStyle: (opt['borderStyle'] || u), // black, etched, gray, raised, sunken. Default is etched
  });
  panel.orientation = opt['orientation'] || this.win.orientation;
  panel.margins = opt['margins'] || this.win.margins;
  panel.spacing = opt['spacing'] || this.win.spacing;
  panel.alignChildren = opt['alignChildren'] || this.win.alignChildren;
  return panel
};

// edittext
UI.prototype.add_input = function (elm, opt) {
  var u;
  var opt = opt || {};
  var input = elm.add('edittext', opt['bounds'] || u, opt['text'] || "", {
    // creation_properties
    name: opt['name'],
    readonly: (opt['readonly'] == u ? false : true),
    noecho: (opt['noecho'] == u ? false : true),
    multiline: (opt['multiline'] == u ? false : true),
    scrollable:(opt['scrollable'] == u ? true : false),
    borderless:(opt['borderless'] == u ? false : true),
  });
  input.preferredSize = opt['size'] || [120, 90];
  
  return input
};

// statictext
UI.prototype.add_text = function (elm, opt) {
  var u;
  var opt = opt || {};
  var text = elm.add('statictext', opt['bounds'] || u, opt['text'] || "", {
    // creation_properties
    name: opt['name'],
    multiline: (opt['multiline'] == u ? false : true),
    scrolling: (opt['scrolling'] == u ? false : true),
    // TODO statictext's creation_properties
    // truncate: ,
  });
  text.characters = opt['characters'] || text.text.length;
  return text
};

// listbox
UI.prototype.add_listbox = function (elm, opt) {
  var u;
  var opt = opt || {};
  var listbox = elm.add('listbox', opt['bounds'] || u, opt['items'] || [], {
    // creation_properties
    name: opt['name'],
    multiselect: opt['multiselect'],
    // TODO listbox's creation_properties
    // numberOfColumns: ,
    // showHeaders: ,
    // columnWidths: ,
    // columnTitles: ,
  });
  listbox.preferredSize = opt['size'] || [120, 90];
  return listbox
};

// dropdownlist
UI.prototype.add_dropdownlist = function (elm, opt) {
  var u;
  var opt = opt || {};
  var dropdownlist = elm.add('dropdownlist', opt['bounds'] || u, opt['items'] || u, {
    // creation_properties
    name: opt['name'],
  });
  dropdownlist.title = opt['title'] || "";
  return dropdownlist
};

// checkbox
UI.prototype.add_checkbox = function (elm, opt) {
  var u;
  var opt = opt || {};
  var checkbox = elm.add('checkbox', opt['bounds'] || u, opt['text'] || "", {
    // creation_properties
    name: opt['name'],
  });
  return checkbox
};

// radiobutton
// add ('radiobutton' [,bounds, text, {creation_properties}])
UI.prototype.add_radiobutton = function (elm, opt) {
  var u;
  var opt = opt || {};
  var radiobutton = elm.add('checkbox', opt['bounds'] || u, opt['text'] || "", {
    // creation_properties
    name: opt['name'],
  })
  return radiobutton
};

// button
// add ('button' [,bounds, text, {creation_properties}])
UI.prototype.add_button = function (elm, opt) {
  var u;
  var opt = opt || {};
  var button = elm.add('button', opt['bounds'] || u, opt['text'] || "", {
    // creation_properties
    name: opt['name'],
  })
  return button
};
