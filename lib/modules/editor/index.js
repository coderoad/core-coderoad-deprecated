"use strict";
var reducer_1 = require('./reducer');
exports.reducer = reducer_1.default;
var actions_1 = require('./actions');
exports.editorDevToolsToggle = actions_1.editorDevToolsToggle;
exports.editorOpen = actions_1.editorOpen;
exports.editorInsert = actions_1.editorInsert;
exports.editorSave = actions_1.editorSave;
exports.editorSet = actions_1.editorSet;
exports.editorScroll = actions_1.editorScroll;
var index_1 = require('../../index');
_a = index_1.editor.action, exports.save = _a.save, exports.open = _a.open, exports.openFolder = _a.openFolder, exports.scroll = _a.scroll, exports.set = _a.set, exports.insert = _a.insert, exports.writeFileFromContent = _a.writeFileFromContent, exports.writeFileFromFile = _a.writeFileFromFile, exports.openDevTools = _a.openDevTools, exports.toggleDevTools = _a.toggleDevTools, exports.clearConsole = _a.clearConsole;
var _a;
//# sourceMappingURL=index.js.map