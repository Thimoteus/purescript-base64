// module Text.Browser.Base64

exports.encode64 = function (str) {
  return btoa(str);
}

exports.decode64 = function (code) {
  return atob(code);
}
