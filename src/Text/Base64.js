// module Text.Base64

if (typeof(btoa) == 'undefined') {
  var btoa = null;
  var atob = null;
  exports.encode64 = function (str) {
    return new Buffer(str).toString('base64');
  }
  exports.decode64 = function (code) {
    return new Buffer(code, 'base64').toString('ascii');
  }
} else {
  exports.encode64 = function (str) {
    return btoa(str);
  }
  exports.decode64 = function (code) {
    return atob(code);
  }
}
