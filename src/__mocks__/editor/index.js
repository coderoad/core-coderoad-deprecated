"use strict";
var jest_1 = require('jest');
exports.editor = {
    name: 'editorName',
    directory: function () { return './path/to/dir'; },
    action: {
        toggleDevTools: jest_1.default.fn(),
        save: function () { return true; },
        open: function (file) { return true; },
        insert: function (text) { return true; },
        set: function (text) { return true; },
        scroll: function (text) { return true; },
        writeFileFromFile: function (options) { return true; },
        writeFileFromContent: function (options) { return true; },
    }
};
//# sourceMappingURL=index.js.map