const got = require("got");
const processHtml = require("./process-html");
const fs = require("fs");

require("babel-core/register");
require("babel-polyfill");

// TODO: Not sure what the code is for Catala
const validLang = [
  "ar",
  "cz",
  "de",
  "en",
  "es",
  "fr",
  "gr",
  "is",
  "it",
  "ja",
  "ko",
  "nl",
  "pl",
  "pt",
  "ro",
  "ru",
  "sv",
  "tr",
  "zh",
];

/**
 * Gets the result for the given word, available languages.
 *
 * @param  {String}   word      Word to be searched
 * @param  {String}   from      from language, default 'en'
 * @param  {String}   to        to language, default 'fr'
 * @param  {function} callback  callback function
 * @return {Object}             Object with the word data
 */
module.exports = async (word, from = "en", to = "fr", callback) => {
  if (!validLang.includes(from)) {
    throw new Error(`${from} is not a valid language`);
  }
  if (!validLang.includes(to)) {
    throw new Error(`${to} is not a valid language`);
  }

  try {
    const response = await got(
      `https://www.wordreference.com/${from}${to}/${word}`
    );
    fs.writeFile("debug.txt", response.body, (err) => {
      if (err) throw err;
      console.log("debug file has been saved!");
    });
    if (callback) {
      return callback(processHtml(response.body));
    } else {
      return processHtml(response.body);
    }
  } catch (e) {
    // throw new Error(e.message ? e.message : e)
    fs.writeFile("error.txt", e.stack ? e.stack : e, (err) => {
      if (err) throw err;
      console.log("Error!");
    });
  }
};
