// module Text.Base64

exports.encode64 = function (str) {
  if (typeof(btoa) == 'undefined') {
    return new Buffer(str).toString('base64');
  } else {
    return btoa(str);
  }
}

exports.decode64 = function (code) {
  if (typeof(atob) == 'undefined') {
    return new Buffer(code, 'base64').toString('ascii');
  } else {
    return atob(code);
  }
}
