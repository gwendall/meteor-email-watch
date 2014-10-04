Meteor.startup(function() {

  Email._watchers = [];

  Email.onSent = function(watcher) {
    if (_.isFunction(watcher)) {
      Email._watchers.push(watcher);
    }
  }

  var emailSend = Email.send;

  Email.sendVanilla = Email.send;
  Email.send = function(options) {
    var self = this;
    var err = null;
    var res = null;
    try {
      Email.sendVanilla(options);
      res = options;
    } catch(e) {
      err = e;
    }
    Email._watchers.forEach(function(watcher) {
      watcher.apply(self, [err, res]);
    })
  }

});
