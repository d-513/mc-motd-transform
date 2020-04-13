# mc-motd-transform

A utility to easily transform minecraft ping motd's to text that is compatible with most minecraft versions.

## Usage

Install:
`$ npm i dada513/mc-motd-transform`  
Use (example):

```js
const { parseMotd, removeColors } = require("mc-motd-transform");
const pingResults = {
  // 1.8 response, but the library works with every major version
  description: {
    text: "§aWelcome §cto §aour §bserver!"
  }
};
// you should put there real results of pinging a server, this is just an example which doesn't have most fields that real servers give.
console.log(parseMotd(pingResults)); // §aWelcome §cto §aour §bserver!
console.log(removeColors(parseMotd(pingResults))); // Welcome to our server!
```

#### Why would anyone use this?

Well, minecraft versions have different responses. The response above from 1.8 is simple, but the more complex ones such as [The 1.15.2 ping](https://github.com/dada513/mc-motd-transform/blob/master/tests/exampleResults/1.json) are a bit annoying to deal with, so I made this utility.

#### Test

```
git clone https://github.com/dada513/mc-motd-transform
cd mc-motd-transform
npm run test
```

# API


## Functions

<dl>
<dt><a href="#parseMotd">parseMotd(pingResults)</a> ⇒ <code>String</code></dt>
<dd><p>Parses a minecraft motd from json ping results.</p>
</dd>
<dt><a href="#removeColors">removeColors(string)</a> ⇒ <code>String</code></dt>
<dd><p>Removes minecraft colors from a string.</p>
</dd>
<dt><a href="#parsePlayers">parsePlayers(pingResults)</a> ⇒ <code>Object</code></dt>
<dd><p>Parses minecraft player count from the given pingResults object.</p>
</dd>
</dl>

<a name="parseMotd"></a>

## parseMotd(pingResults) ⇒ <code>String</code>

Parses a minecraft motd from json ping results.

**Kind**: global function
**Returns**: <code>String</code> - - Parsed MOTD

| Param       | Type                | Description              |
| ----------- | ------------------- | ------------------------ |
| pingResults | <code>Object</code> | Minecraft JSON response. |

<a name="removeColors"></a>

## removeColors(string) ⇒ <code>String</code>

Removes minecraft colors from a string.

**Kind**: global function
**Returns**: <code>String</code> - - String with removed colors

| Param  | Type                | Description                  |
| ------ | ------------------- | ---------------------------- |
| string | <code>String</code> | String to remove colors from |

<a name="parsePlayers"></a>

## parsePlayers(pingResults) ⇒ <code>Object</code>

Parses minecraft player count from the given pingResults object.

**Kind**: global function
**Returns**: <code>Object</code> - - Parsed player count

| Param       | Type                | Description              |
| ----------- | ------------------- | ------------------------ |
| pingResults | <code>Object</code> | Minecraft JSON response. |
