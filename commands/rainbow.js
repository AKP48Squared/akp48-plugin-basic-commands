function Rainbow() {
  this.names = ['rainbow', 'r'];
}

Rainbow.prototype.respond = function (ctx) {
  ctx.setCustomData('noPrefix', true);
  return [{style: "rainbow", text: ctx.argText()}];
};

module.exports = Rainbow;
