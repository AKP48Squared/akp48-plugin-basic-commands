function Source() {
  this.names = ['source', 'src', 'repo', 'link'];
}

Source.prototype.respond = function (ctx) {
  var text = `https://github.com/AKP48Squared/${ctx.args().plugin || 'AKP48Squared'}/`;
  return {style: 'link', text: text};
};

module.exports = Source;
