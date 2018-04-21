function a () {
  return 'duncan';
}

function b () {
  return 'hello ' + a();  
}

function c () {
  return 3
}

// exports.b = b
// exports.c = c

// similar to above
module.exports = {
  b,
  c
}