function Daft() {
  this.names = ['daft'];
}

Daft.prototype.respond = function (context) {
  var noun = '';
  if(context.argText().length) {
    noun = `${context.argText()}: `;
    context.setCustomData('noPrefix', true);
  }

  return `${noun}are you daft?`;
};

module.exports = Daft;
