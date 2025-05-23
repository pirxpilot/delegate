[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# delegate

Bare-bones DOM event delegation for modern browsers.

## Install

```sh
$ npm install --save @pirxpilot/delegate
```

## Usage

```js
import delegate from '@pirxpilot/delegate';

// call `onOk` when '.ok` in buttons is clicked
const handler = delegate.bind(buttons, '.ok', 'click', onOk);

// remove onOk handler
delegate.unbind(buttons, 'click', handler);

```

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/delegate
[npm-url]: https://npmjs.org/package/@pirxpilot/delegate

[build-url]: https://github.com/pirxpilot/delegate/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/delegate/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/@pirxpilot/delegate
[deps-url]: https://libraries.io/npm/@pirxpilot%2Fdelegate
