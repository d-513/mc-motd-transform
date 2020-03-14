const colors = require("./colors.json");
/**
 * Parses a minecraft motd from json ping results.
 * @param {Object} pingResults - Minecraft JSON response.
 * @returns {String} - Parsed MOTD
 */
module.exports.parseMotd = pingResults => {
  let desc = "";
  if (!pingResults.description) {
    if (pingResults.motd) {
      return pingResults.motd;
    }
  } else if (pingResults.description.extra) {
    pingResults.description.extra.forEach(element => {
      if (element.obfuscated) {
        desc += "§k";
      }
      if (element.bold) {
        desc += "§l";
      }
      if (element.strikethrough) {
        desc += "§m";
      }
      if (element.underline) {
        desc += "§n";
      }
      if (element.italic) {
        desc += "§o";
      }
      if (element.reset) {
        desc += "§r";
      }
      if (colors[element.color]) {
        desc += `§${colors[element.color]}${element.text}`;
      } else {
        desc += element.text;
      }
    });
  } else if (pingResults.description.text) {
    desc = pingResults.description.text;
  } else {
    desc = pingResults.description;
  }
  return desc;
};
/**
 * Removes minecraft colors from a string.
 * @param {String} - String to remove colors from
 * @returns {String} - String with removed colors
 */
module.exports.removeColors = string => {
  const regex = /\u00A7[0-9A-FK-OR]/gi;
  return string.replace(regex, "");
};
