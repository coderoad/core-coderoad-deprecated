"use strict";
var main_1 = require('./main');
process.env.NODE_ENV = 'production';
var init = function (ed) {
    exports.editor = ed;
    return new main_1.default(ed);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = init;
//# sourceMappingURL=index.js.map