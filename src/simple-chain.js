const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    } else if (typeof position === 'string' && this.chain.includes(position)) {
      this.chain.splice(this.chain.indexOf(position), 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
