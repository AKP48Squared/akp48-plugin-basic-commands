'use strict';

class BasicCommands extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'BasicCommands');
    this.commands = {};
    this._data = {};
  }

  load() {
    this._data = require('./plugin.json');
    var self = this;
    require('./commands').then(function(res){
      self.commands = res;
    }, function(err){
      console.error(err);
    });
  }
}

BasicCommands.prototype.handleCommand = function (context) {
  global.logger.silly(`${this.name}: Received command.`);

  var command = context.command();

  //for each command we have
  for (var cmd in this.commands) {
    if (this.commands.hasOwnProperty(cmd)) {
      //check to see if it's the command we're wanting
      global.logger.stupid(`${this.name}: Checking ${cmd} command for ${command}.`);

      //if this command is the one we're trying to run
      if(this.commands[cmd].names.includes(command.toLowerCase())) {
        global.logger.stupid(`${this.name}: Found command for ${command}.`);

        //set name to first alias of command, for permissions check purposes.
        var name = this.commands[cmd].names[0];

        //check permissions. if command requires permissions
        if(this._data && this._data.commands && this._data.commands[name] &&
          this._data.commands[name].perms && this._data.commands[name].perms.length) {
          //and we don't have any at all, simply log and do nothing else
          if(!context.permissions()) {
            global.logger.debug(`${this.name}: Command ${command} requires permissions and none were found.`);
            continue;
          }
          //but if we have some permissions, loop through command perms and see if we have any of them.
          var block = true;
          for (var i = 0; i < this._data.commands[name].perms.length; i++) {
            if(context.permissions().includes(this._data.commands[name].perms[i])) {
              block = false;
              break;
            }
          }

          // If we don't have any of the permissions, log and leave
          if(block) {
            global.logger.debug(`${this.name}: Command ${command} requires permissions and none were found.`);
            continue;
          }
        }

        // If we get here, we passed all checks, so we just run it.
        context.reply(this.commands[cmd].respond(context));
      }
    }
  }
};

module.exports = BasicCommands;
