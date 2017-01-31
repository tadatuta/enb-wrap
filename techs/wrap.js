/**
 * enb-wrap
 * ========
 *
 * Wraps a file into arbitrary content.
 *
 * **Options**
 *
 * * *String* **source** — Source file.
 * * *String* **target** — Target file.
 * * *String* **before** — Text to append before source content.
 * * *String* **after**  — Text to append after source content.
 * * *Function* **wrap** — Wrapper function.
 *
 * **Example**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-wrap/techs/wrap'));
 * ```
 */
var vfs = require('enb/lib/fs/async-fs');

module.exports = require('enb/lib/build-flow').create()
    .name('enb-wrap')
    .target('target')
    .defineRequiredOption('target')
    .defineRequiredOption('source')
    .defineOption('before', '')
    .defineOption('after', '')
    .defineOption('wrap')
    .useSourceFilename('source')
    .builder(function(fileName) {
        var before = this._before,
            after = this._after,
            wrap = this._wrap;

        return vfs.read(fileName, 'utf-8')
            .then(function(content) {
                var wrappedContent = before + content + after;

                return wrap ? wrap(wrappedContent, fileName) : wrappedContent;
            });
    })
    .createTech();
