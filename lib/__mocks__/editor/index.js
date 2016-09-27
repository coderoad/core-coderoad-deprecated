"use strict";
exports.editor = {
    name: 'editorName',
    directory: function () { return './path/to/dir'; },
    action: {
        toggleDevTools: function () { return true; },
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