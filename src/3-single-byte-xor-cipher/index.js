const fillRange = require('fill-range');

const XorCipherEvaluator = require('./XorCipherEvaluator');

const target = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
const characters = fillRange('a', 'z').concat([' ']);

const xce = new XorCipherEvaluator(target, characters);
xce.run();
// xce.stringifyResultingBufs();
