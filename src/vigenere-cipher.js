const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect ?? true;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(message, key) {
    return this.encryption(message, key, 1);
  }
  decrypt(message, key) {
    return this.encryption(message, key, -1);
  }

  encryption(message, key, act) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    let letteredMessage = message
      .split('')
      .filter((lett) => lett.match(/([A-Z])/g));
    key = key
      .toUpperCase()
      .split('')
      .filter((lett) => lett.match(/([A-Z])/g))
      .join('');
    key = key
      .repeat(Math.ceil(letteredMessage.length / key.length))
      .slice(0, letteredMessage.length);
    let encryptedMessage = '';
    let letter = '';
    let l = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (this.alphabet.includes(message[i])) {
        let j =
          this.alphabet.indexOf(letteredMessage[l]) +
          this.alphabet.indexOf(key[l]) * act;
        if (j > 25) {
          j -= 26;
        } else if (j < 0) {
          j += 26;
        }
        letter = this.alphabet[j];
        l += 1;
      } else {
        letter = message[i];
      }

      encryptedMessage += letter;
    }
    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
