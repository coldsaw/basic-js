const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let results = {};

  domains.forEach((str) => {
    let arr = str.split('.');
    arr = arr.reverse();
    let zone = '.' + arr[0];
    let site = zone + '.' + arr[1];
    let reversedUrl;
    if (arr.length > 2) {
      reversedUrl = '.' + arr.join('.');
    }
    let domArr = [zone, site, reversedUrl];
    domArr.forEach((el) => {
      if (el) {
        if (el in results) {
          results[el] += 1;
        } else {
          results[el] = 1;
        }
      }
    });
  });
  return results;
}

module.exports = {
  getDNSStats,
};
