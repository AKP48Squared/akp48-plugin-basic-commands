function Rainbow() {
  this.names = ['rainbow', 'r'];
}

Rainbow.prototype.respond = function (ctx) {
  ctx.setCustomData('noPrefix', true);
  return ctx.instance().TextDecorator.rainbow(ctx.argText());
};

module.exports = Rainbow;
