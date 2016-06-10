'use strict';

class BasicCommands extends global.AKP48.pluginTypes.MessageHandler {
  constructor(AKP48) {
    super(AKP48, 'BasicCommands');
    this._data = {};
    this.logicEngine = null;
  }

  load() {
    this._data = require('./plugin.json');
    var self = this;
    require('./commands').then(function(res){
      self.logicEngine = new LogicEngine(res, self._data, self.name);
    }, function(err){
      console.error(err);
    });
  }
}

BasicCommands.prototype.handleCommand = function (context) {
  global.logger.silly(`${this.name}: Received command.`);
  if(!this.logicEngine) {
    global.logger.error(`${this.name}: Cannot respond to command, as LogicEngine is not initialized!`);
    return;
  }

  this.logicEngine(context);
};

function LogicEngine (cmds, data, name) {
  this.cmds = cmds;
  this.data = data;
  this.name = name;
  return (c) => {
    var command = c.command();

    //for each command we have
    for (var cmd in this.cmds) {
      if (this.cmds.hasOwnProperty(cmd)) {
        //check to see if it's the command we're wanting
        global.logger.stupid(`${this.name}: Checking ${cmd} command for ${command}.`);

        //if this command is the one we're trying to run
        if(this.cmds[cmd].names.includes(command.toLowerCase())) {
          global.logger.stupid(`${this.name}: Found command for ${command}.`);

          //set name to first alias of command, for permissions check purposes.
          var name = this.cmds[cmd].names[0];

          //check permissions. if command requires permissions
          if(this.data && this.data.commands && this.data.commands[name] &&
            this.data.commands[name].perms && this.data.commands[name].perms.length) {
            //and we don't have any at all, simply log and do nothing else
            if(!c.permissions()) {
              global.logger.debug(`${this.name}: Command ${command} requires permissions and none were found.`);
              continue;
            }
            //but if we have some permissions, loop through command perms and see if we have any of them.
            var block = true;
            for (var i = 0; i < this.data.commands[name].perms.length; i++) {
              if(c.permissions().includes(this.data.commands[name].perms[i])) {
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
          c.reply(this.cmds[cmd].respond(c));
        }
      }
    }
  };
}

module.exports = BasicCommands;
module.exports.LogicEngine = LogicEngine;
