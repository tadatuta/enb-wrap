# enb-wrap

ENB plugin to wrap a file into arbitrary content.

## Installation

```
npm i enb-wrap --save
```

## Usage

```js
[require('enb-wrap/techs/wrap'), {
    source: '?.js',
    target: '?.wrapped.js',
    before: '/* before */',
    after: '/* after */',
    wrap: function(content, file) {
        return [
            '// The code was taken from ' + file,
            content
        ].join('\n');
    }
}]
```

## License

© 2014 YANDEX LLC. The Source Code is subject to the terms of the [Mozilla Public License 2.0](LICENSE.txt).
