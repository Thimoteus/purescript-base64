// module Text.Base64

exports.encode64 = function (str) {
  if (typeof(btoa) == 'undefined') {
    var btoa = null;
    var atob = null;
    return new Buffer(str).toString('base64');
  } else {
    return btoa(str);
  }
}

exports.decode64 = function (code) {
  if (typeof(atob) == 'undefined') {
    var btoa = null;
    var atob = null;
    return new Buffer(code, 'base64').toString('ascii');
  } else {
    return atob(code);
  }
}
