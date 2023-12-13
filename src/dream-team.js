const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';
  let fixedMembers;
  if (Array.isArray(members)) {
    fixedMembers = members
      .filter((name) => name && typeof name === 'string')
      .map((name) => (name = name.trim().toUpperCase()))
      .sort();

    fixedMembers.forEach((name) => (result += name[0]));
  }
  return result ? result : false;
}

module.exports = {
  createDreamTeam,
};
