function Plugins() {
  this.names = ['plugins', 'pl'];
}

Plugins.prototype.respond = function (context) {
  var pluginsObj = global.AKP48._pluginList;
  var outputString = `Plugins: `;
  for (var k in pluginsObj) {
    if (pluginsObj.hasOwnProperty(k)) {
      outputString += `${pluginsObj[k].name} `;
      if (pluginsObj[k].error) {
        outputString += `[*] | `;
      } else {
        outputString += `| `;
      }
    }
  }

  return outputString.substr(0, outputString.length-2);
};

module.exports = Plugins;
