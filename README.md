# purescript-base64 [![Build Status](https://travis-ci.org/Thimoteus/purescript-base64.svg)](https://travis-ci.org/Thimoteus/purescript-base64)

Encoding and decoding of base64 strings for both Node and the browser.

Note: `encode64` and `decode64` are in general **not** inverses on the set of all strings.
But you can expect `decode64 <<< encode64 <<< encode64 == encode64` on Node.

### Browser-based usage

This delegates to the browser's `atob` and `btoa` functions, so unicode in particular
may cause [unexpected behavior](https://github.com/Thimoteus/purescript-base64/issues/2).

## Installation
```
bower install purescript-radix64
```

## Module Documentation
- [Text.Base64](docs/Text/Base64.md)
