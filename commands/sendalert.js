function SendAlert() {
  this.names = ['sendalert'];
}

SendAlert.prototype.respond = function (context) {
  context.reply(context.cloneWith({isAlert: true, text: context.argText()}));
  return 'Alert sent!';
};

module.exports = SendAlert;
