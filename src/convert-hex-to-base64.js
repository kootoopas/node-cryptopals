const btoa = require('btoa');

const hexInput = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573' +
  '206d757368726f6f6d';
const hexInputLength = hexInput.length;

const hexBuffer = new Buffer(hexInput, 'hex');
const hexBufferToBinaryToBase64 = btoa(hexBuffer);
const hexBufferToBase64 = hexBuffer.toString('base64');

const filledBuffer = new Buffer(hexInputLength).fill(hexInput);
const filledBufferToBinaryToBase64 = btoa(filledBuffer);

const results = '\n' +
  'Buffer of type hex => to binary => to base 64:\n' +
  '👌  ' + hexBufferToBinaryToBase64 + '\n\n' +
  'Buffer of type hex => to base 64:\n' +
  '👌  ' + hexBufferToBase64 + '\n\n' +
  'Buffer of certain length which is filled after construction:\n' +
  '👎  ' + filledBufferToBinaryToBase64 + '\n\n' +
  'Conclusion: What I get from these, is that it\'s really important to specify that the input ' +
  'string is encoded in hex\n';

console.log(results);
