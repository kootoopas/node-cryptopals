const xor = require('./lib/xor');

const EXPECTED_XOR_RESULT = '746865206b696420646f6e277420706c6179';

const buffer1 = new Buffer('1c0111001f010100061a024b53535009181c', 'hex');
const buffer2 = new Buffer('686974207468652062756c6c277320657965', 'hex');

const result = xor(buffer1, buffer2);
