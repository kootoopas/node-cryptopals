// function hexToBin(hexNumber) {
//   // TODO: test if binary output on bignum differs from parseInt => parseInt eats bits
//   return (new BigNumber(hexNumber, 16)).toString(2);
// }
//
// function binToHex(binNumber) {
//   // TODO: test if binary output on bignum differs from parseInt => parseInt eats bits
//   return (new BigNumber(binNumber, 2)).toString(16);
// }

function produceXor(hexBuffer1, hexBuffer2) {
  const maxBufferLength = Math.max(hexBuffer1.length, hexBuffer2.length);
  const xorBuffer = new Buffer(maxBufferLength);

  for (let i = 0; i < maxBufferLength; i++) {
    xorBuffer[i] = hexBuffer1[i] ^ hexBuffer2[i];
  }

  return xorBuffer;
}

function xor(hexBuffer1, hexBuffer2) {
  let xorBuffer;

  try {
    if (!hexBuffer1 instanceof Buffer ||
        !hexBuffer2 instanceof Buffer) {
      throw new TypeError('Only Buffer objects are accepted.');
    }

    if (hexBuffer1.length !== hexBuffer2.length) {
      throw new RangeError('Both buffers must be of equal length.');
    }

    xorBuffer = produceXor(hexBuffer1, hexBuffer2);
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }

  return xorBuffer;
}

module.exports = xor;
