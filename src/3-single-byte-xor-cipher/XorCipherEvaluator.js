class XorCipherEvaluator {
  constructor(targetStr, ciphers) {
    this.targetBuf = Buffer.from(targetStr, 'hex');
    this.targetBufLength = this.targetBuf.byteLength;
    this.ciphers = [];
    this.resultingBufs = [];
    this.scores = [];
    this.correctCipher = null;

    if (ciphers) this.setCiphers(ciphers);
  }

  setCiphers(ciphers) {
    this.ciphers = ciphers.map(cipher => Buffer.from(cipher, 'utf8')
      .toString('hex'));
  }

  run() {
    this.ciphers.forEach(this._cipherCb, this);

    // this._evaluateResults();
  }

  _cipherCb(cipher, cipherI) {
    const resultingBufBytes = [];

    for (let i = 0; i < this.targetBufLength; i++) {
      const resultingByte = cipher ^ this.targetBuf[i];
      resultingBufBytes.push(resultingByte);
    }

    this.resultingBufs[cipherI] = Buffer.from(resultingBufBytes, 'hex');
    console.log(this.resultingBufs[cipherI].toString('utf8'));
  }

  _evaluateResultingBufs(byte, cipherI) {
    this._evaluateCharFrequency(cipherI);
  }

  _evaluateCharFrequency(cipherI) {
    const frequencies = {};
    this.resultingBufs[cipherI].forEach((byte) => {
      frequencies[byte] = (frequencies[byte] || 0) + 1;
    });

    // TODO: Find way to use metric.


    // console.log(frequencies);
  }

  // stringifyResultingBufs() {
  //   let line;
  //
  //   this.resultingBufs.forEach((cipher, cipherI) => {
  //     line = `${this.ciphers[cipherI].toString('utf8')}  `;
  //     cipher.forEach((xorResult) => {
  //       line += `${xorResult}  `;
  //     });
  //
  //     console.log(line);
  //   });
  // }

  stringifyResultingBufs() {
    let line;

    this.resultingBufs.forEach((cipher, cipherI) => {
      line = `${this.ciphers[cipherI].toString('utf8')}  `;
      cipher.forEach((xorResult) => {
        line += `${xorResult}  `;
      });

      console.log(line);
    });
  }
}

module.exports = XorCipherEvaluator;
