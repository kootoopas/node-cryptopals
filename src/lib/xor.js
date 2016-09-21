const BigNumber = require('bignumber.js');

function hexToBin(hexNumber) {
  // TODO: test if binary output on bignum differs from parseInt => parseInt eats bits
  return (new BigNumber(hexNumber, 16)).toString(2);
}

function binToHex(binNumber) {
  // TODO: test if binary output on bignum differs from parseInt => parseInt eats bits
  return (new BigNumber(binNumber, 2)).toString(16);
}

function produceXorCombo(binaryStr1, binaryStr2) {
  let xorCombo = '';
  let shortStr;
  let longStr;
  let currentResultingBit;

  if (binaryStr1.length < binaryStr2.length) {
    shortStr = binaryStr1;
    longStr = binaryStr2;
  } else {
    shortStr = binaryStr2;
    longStr = binaryStr1;
  }

  const shortStrLength = shortStr.length;
  const longStrLength = longStr.length;
  const lengthDiff = longStrLength - shortStrLength;

  // xorCombo = new Buffer

  console.log(`  ${shortStr}`);
  console.log(longStr);

  // TODO: Properly convert buffer hex to bin. Iterate(?) & do bitwise xors. Convert back
  // Bin is actually a string. (maybe that's the prob)
  // Current problem: does not do xors properly
  // Maybe I get one off from lengthDiff - 1
  // Possible solution convert to 8 byte blocks with substring http://stackoverflow.com/questions/14603205/how-to-convert-hex-string-into-a-bytes-array-and-a-bytes-array-in-the-hex-strin
  for (let i = shortStrLength; i > 0; i--) {
    // console.log(longStr[i + lengthDiff - 1])

    currentResultingBit = longStr[i + lengthDiff] ^ shortStr[i];
    xorCombo = currentResultingBit + xorCombo;
  }

  const longStrDiffPrefix = longStr.substr(0, longStrLength - shortStrLength);

  return longStrDiffPrefix + xorCombo;
}

function xor(hexBuffer1, hexBuffer2) {
  let xorCombo;
  let binaryStr1;
  let binaryStr2;

  try {
    if (!hexBuffer1 instanceof Buffer || !hexBuffer2 instanceof Buffer) {
      throw new TypeError('Only Buffer objects are accepted.');
    }

    if (hexBuffer1.length !== hexBuffer2.length) {
      throw new RangeError('Both buffers must be of equal length.');
    }

    binaryStr1 = hexToBin(hexBuffer1.toString('hex'));
    binaryStr2 = hexToBin(hexBuffer2.toString('hex'));

    xorCombo = produceXorCombo(binaryStr1, binaryStr2);
    console.log(xorCombo);
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }

  console.log(binToHex(xorCombo));

  return binToHex(xorCombo);
}

module.exports = xor;
