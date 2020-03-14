const { readdirSync } = require("fs");
const { join } = require("path");
const { parseMotd, removeColors } = require("../src/index");

readdirSync(join(__dirname, "exampleResults")).forEach(file => {
  const pingResults = require(`./exampleResults/${file}`);
  console.log(`${file}: Parsed Motd: ${parseMotd(pingResults)}`);
  console.log(
    `${file}: Removed colors: ${removeColors(parseMotd(pingResults))}`
  );
});
