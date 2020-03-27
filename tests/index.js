const { readdirSync } = require("fs");
const { join } = require("path");
const { parseMotd, removeColors, parsePlayers } = require("../src/index");

readdirSync(join(__dirname, "exampleResults")).forEach(file => {
  const pingResults = require(`./exampleResults/${file}`);
  console.log(`${file}: Parsed Motd: ${parseMotd(pingResults)}`);
  console.log(
    `${file}: Removed colors: ${removeColors(parseMotd(pingResults))}`
  );
  const players = parsePlayers(pingResults);
  console.log(`${file}: Parsed players: ${players.online}/${players.max}`);
});
