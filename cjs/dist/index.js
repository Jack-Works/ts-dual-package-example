"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = void 0;
const constant_js_1 = require("./constant.js");
// import { a } from 'pure_esm'
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this is ok for esm output, but invalid for cjs output.
// you can try to uncomment this line and run `npm run build`.
// this is ok in both mode.
import('pure_esm');
// import a correctly dual package is ok in both mode.
const dual_1 = require("dual");
// well, we don't have luck here.
// NodeJS tries to guess and generate ESM exports for commonjs modules and fails in this case
// it is a RUNTIME crash:
//     SyntaxError: Named export 'a' not found. The requested module 'pure_cjs' is a CommonJS module, which may not support all module.exports as named exports.
// this import should be a type error under ESM mode, but I cannot make it happen.
// import { a } from 'pure_cjs'
// console.log(a)
function f() {
    ;
    [constant_js_1.val, dual_1.x];
}
exports.f = f;
