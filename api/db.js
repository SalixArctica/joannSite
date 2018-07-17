const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

loadDb = () => {
  let load = fs.readFileSync((__dirname + '/database.json'), (err) => {console.log(err);})
  return JSON.parse(load);
}

let data = loadDb();

saveDb = (d) => {
  fs.writeFile(__dirname + '/database.json', JSON.stringify(d), (err) => {console.log(err);})
}

module.exports = { data, loadDb, saveDb };
