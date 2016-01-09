# purescript-base64 [![Build Status](https://travis-ci.org/Thimoteus/purescript-base64.svg)](https://travis-ci.org/Thimoteus/purescript-base64)

Encoding and decoding of base64 strings for both Node and the browser.

Note: `encode64` and `decode64` are in general **not** inverses on the set of all strings.
But you can expect `decode64 <<< encode64 <<< encode64 == encode64`.

## Installation
```
bower install purescript-base64
```

## Module Documentation
- [Text.Base64](docs/Text/Base64.md)
